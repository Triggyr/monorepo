import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios';
import { prettyGql, toPayload, toEnumPayload, resolveFields, logger } from './utils';
import type {
   DeepPick,
   GraphqlBoolExp,
   GraphqlInsertTypes,
   GraphqlOptions,
   GraphqlResponse,
   GraphqlSelectOptions,
   GraphqlSelectTypes,
   GraphqlUpdateTypes,
   NonEmptyArr,
   ObjectPaths,
   ObjectPathsWithArray,
   PropertyValuexxx,
} from './types';

declare module 'axios' {
   interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class GraphqlClient {
   protected options: Required<GraphqlOptions>;
   protected dbClient: AxiosInstance;

   constructor(options: GraphqlOptions) {
      this.options = {
         ...options,
         debug: options.debug ?? false,
         log_query: options.log_query ?? true,
         logger: options.logger ?? logger,
      };
      this.dbClient = axios.create({ baseURL: this.options.host });
      this._initializeResponseInterceptor();
   }

   private _initializeResponseInterceptor = () => {
      this.dbClient.interceptors.response.use(this._handleResponse, this._handleError);
   };

   private _handleResponse = ({ data }: AxiosResponse) => {
      let response: any = {};

      if (data.errors) {
         response = data;
      } else {
         response.data = data;
      }

      return response;
   };

   private _handleError = (error: AxiosError) => {
      if (error.response?.status == 500) {
         return Promise.reject('service provider returns server error');
      }

      return Promise.reject(error);
   };

   private getHeaders(): Record<string, string> {
      return {
         ...(this.options?.headers ?? {}),
         'Content-Type': 'application/json',
         Accept: 'application/json',
      };
   }

   private getRootQueryName(
      operation: 'by_pk' | 'aggregate' | 'select' | 'update' | 'insert' | 'delete',
      entityName: string,
   ): string {
      if (operation === 'aggregate' || operation === 'by_pk') return `${entityName}_${operation}`;
      if (operation === 'select') return entityName;

      return `${operation}_${entityName}`;
   }

   public async request(graphqlQuery: {
      query: string;
      variables?: { limit?: number; offset?: number; [x: string]: any };
   }): Promise<{ errors: any; data: any | null; took: number }> {
      const start = Date.now();
      let data_,
         took = 0,
         error = null;

      try {
         let { errors, data } = await this.dbClient.post(this.options?.host!, graphqlQuery, {
            headers: this.getHeaders(),
         });

         if (this.options?.log_query) this.options.logger({ errors, data });

         error = errors;
         took = Date.now() - start;
         data_ = data;
      } catch (error_) {
         error = error_;
      }

      return { errors: error, data: data_, took };
   }

   public async insert<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
   >(
      entityName: EntityName,
      objects: GraphqlInsertTypes[EntityName][],
      fields: NonEmptyArr<ResponseKeys>,
   ): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[]>> {
      const rootQueryName = this.getRootQueryName('insert', entityName as string);
      const graphqlQuery = {
         query: `
  			mutation {
  				${rootQueryName} (objects: ${toPayload(objects)}) {
  					returning {
  						${resolveFields(fields)}
  					}
  				}
  			}
  		`,
      };

      if (this.options?.log_query) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger({ errors, data, took });
         this.options.logger(`${took}ms`);
      }

      return { errors, data: data?.data![rootQueryName]?.returning };
   }

   public async insertOne<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
   >(
      entityName: EntityName,
      objects: GraphqlInsertTypes[EntityName],
      fields: NonEmptyArr<ResponseKeys>,
   ): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys> | null>> {
      const { errors, data } = await this.insert(entityName, [objects], fields);
      return { errors, data: data?.[0] ?? null };
   }

   public async update<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<
         GraphqlSelectTypes[EntityName] & { _affected_rows: number }
      >,
   >(
      entityName: EntityName,
      objects: GraphqlUpdateTypes[EntityName],
      fields: NonEmptyArr<ResponseKeys>,
      options: { where: GraphqlBoolExp<EntityName> },
   ): Promise<
      GraphqlResponse<
         any,
         DeepPick<GraphqlSelectTypes[EntityName] & { affected_rows: number }, ResponseKeys>[]
      >
   > {
      let { where } = options;
      where = {
         ...where,
         deleted_at: { _is_null: true },
      };

      const rootQueryName = this.getRootQueryName('update', entityName as string);

      const returningFields = fields.filter((field) => field !== '_affected_rows');

      const includeAffectedRows = fields.includes('_affected_rows' as ResponseKeys);

      const graphqlQuery = {
         query: `
              mutation {
                  ${rootQueryName} (where: ${toPayload(where)}, _set: ${toPayload(objects)}) {
                      ${
                         returningFields.length > 0
                            ? `
                      returning {
                          ${resolveFields(returningFields)}
                      }`
                            : ''
                      }
                      ${includeAffectedRows ? 'affected_rows' : ''}
                  }
              }
          `,
      };

      if (this.options?.log_query) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(data);
         this.options.logger(`${took}ms`);
      }

      const result = data?.data[rootQueryName];
      return {
         errors,
         data: result?.returning?.map((r: any) => ({
            ...r,
            affected_rows: result?.affected_rows,
         })),
      };
   }

   public async select<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
   >(
      entityName: EntityName,
      fields: NonEmptyArr<ResponseKeys>,
      options?: GraphqlSelectOptions<EntityName>,
   ): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[]>> {
      let { offset, limit, where, orderBy, queryName } = options || {};
      where = { ...(where ?? {}), deleted_at: { _is_null: true } } as any;

      const rootQueryName = this.getRootQueryName('select', entityName as string);
      const graphqlQuery = {
         query: `
  			query ${queryName || ''} ($limit: Int, $offset: Int) {
  				${rootQueryName} (
  					limit: $limit,
  					offset: $offset,
  					${where ? `where: ${toPayload(where)},` : ''}
  					${orderBy ? `order_by: ${toEnumPayload(orderBy)},` : ''}
  				) {
  					${resolveFields(fields as unknown as string[])}
  				}
  			}
  		`,
         variables: {
            limit,
            offset,
         },
      };

      if (this.options?.log_query) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(data);
         this.options.logger(`${took}ms`);
      }

      return { errors, data: data?.data[rootQueryName] as any };
   }

   public async selectOne<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
   >(
      entityName: EntityName,
      fields: NonEmptyArr<ResponseKeys>,
      options?: GraphqlSelectOptions<EntityName>,
   ): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys> | null>> {
      const { errors, data } = await this.select(entityName, fields, options);
      return { errors, data: data?.[0] ?? null };
   }

   public async selectBatch<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
   >(
      batch: {
         entityName: EntityName;
         fields: NonEmptyArr<ResponseKeys>;
         options?: GraphqlSelectOptions<EntityName>;
      }[],
   ): Promise<
      GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[][] | null>
   > {
      const getKey = (index: number): string => `query_key_${index}`;
      const batchVariables: Record<string, any> = {};
      const batchQuery: Record<string, any> = {};
      let finalQueryName = '';

      batch.forEach((b, index) => {
         const key = getKey(index);
         const options: any = b.options ?? {};
         const { entityName, fields } = b;

         let { offset, limit, where, orderBy, queryName } = options;
         where = {
            ...where,
            deleted_at: {
               _is_null: true,
            },
         };

         finalQueryName = queryName || '';
         const rootQueryName = this.getRootQueryName('select', entityName as string);

         batchVariables[key] = {
            [`${key}_limit`]: limit,
            [`${key}_offset`]: offset,
         };

         batchQuery[key] = `
  			${key}: ${rootQueryName} (
  				limit: $${key}_limit,
  				offset: $${key}_offset,
  				${where ? `where: ${toPayload(where)},` : ''}
  				${orderBy ? `order_by: ${toEnumPayload(orderBy)},` : ''}
  			) {
  				${resolveFields(fields as unknown as string[])}
  			}
  		`;
      });

      const queryParams = Object.values(batchVariables).reduce((acc, v) => {
         const batchParamsKeys = Object.keys(v);
         const gqlKeys = batchParamsKeys.map((k) => `$${k}: Int`);
         return [...acc, ...gqlKeys];
      }, []);

      const graphqlQuery = {
         query: `
  			query ${finalQueryName} (${queryParams}) {
  				${Object.values(batchQuery).reduce((acc, v) => [...acc, v], [])}
  			}
  		`,
         variables: Object.values(batchVariables).reduce((acc, v) => ({ ...acc, ...v }), {}),
      };

      if (this.options?.log_query) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(JSON.stringify(data, null, 2));
         this.options.logger(`${took}ms`);
      }

      return {
         errors,
         data: data
            ? new Array(batch.length).fill(0).map((_, index) => data.data[getKey(index)])
            : null,
      };
   }

   public async selectByPk<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>,
      EntityRootKeys extends ObjectPaths<GraphqlSelectTypes[EntityName]>,
   >(
      entityName: EntityName,
      fields: NonEmptyArr<ResponseKeys>,
      pk: {
         pkName: EntityRootKeys;
         pkValue: PropertyValuexxx<GraphqlSelectTypes[EntityName], EntityRootKeys>;
      },
   ): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>>> {
      const rootQueryName = this.getRootQueryName('by_pk', entityName as string);

      const graphqlQuery = {
         query: `
  			query {
  				${rootQueryName} (
  					${pk.pkName}: "${pk.pkValue}"
  				) {
  					${resolveFields(fields as unknown as string[])}
  				}
  			}
  		`,
      };

      if (this.options?.debug) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(JSON.stringify(data, null, 2));
         this.options.logger(`${took}ms`);
      }

      return { errors, data: data?.data[rootQueryName] };
   }

   public async delete<
      EntityName extends keyof GraphqlSelectTypes,
      ResponseKeys extends ObjectPathsWithArray<
         GraphqlSelectTypes[EntityName] & { _affected_rows: number }
      >,
   >(
      entityName: EntityName,
      fields: NonEmptyArr<ResponseKeys>,
      options: { where: GraphqlBoolExp<EntityName> },
   ): Promise<
      GraphqlResponse<
         any,
         DeepPick<GraphqlSelectTypes[EntityName] & { affected_rows: number }, ResponseKeys>[]
      >
   > {
      let { where } = options;
      where = { ...where, deleted_at: { _is_null: true } };

      const rootQueryName = this.getRootQueryName('delete', entityName as string);

      const returningFields = fields.filter((field) => field !== '_affected_rows');

      const includeAffectedRows = fields.includes('_affected_rows' as ResponseKeys);

      const graphqlQuery = {
         query: `
  			mutation {
  				${rootQueryName} (where: ${toPayload(where)}) {
            ${
               returningFields.length > 0
                  ? `
                      returning {
                          ${resolveFields(returningFields)}
                      }`
                  : ''
            }
            ${includeAffectedRows ? 'affected_rows' : ''}
  				}
  			}
  		`,
      };

      if (this.options?.debug) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(JSON.stringify(data, null, 2));
         this.options.logger(`${took}ms`);
      }

      const result = data?.data[rootQueryName];
      return {
         errors,
         data: result?.returning?.map((r: any) => ({
            ...r,
            affected_rows: result?.affected_rows,
         })),
      };
   }

   public async aggregate<EntityName extends keyof GraphqlSelectTypes>(
      entityName: EntityName,
      options?: { where: GraphqlBoolExp<EntityName> },
   ): Promise<GraphqlResponse<any, { aggregate: { count: number } }>> {
      let { where } = options || {};
      where = { ...(where ?? {}), deleted_at: { _is_null: true } } as any;

      const rootQueryName = this.getRootQueryName('aggregate', entityName as string);
      const graphqlQuery = {
         query: `
  			query {
  				${rootQueryName} ${where ? `(where: ${toPayload(where)})` : ''} {
  					aggregate {
  						count
  					}
  				}
  			}
  		`,
      };

      if (this.options?.debug) this.options.logger(prettyGql(graphqlQuery.query));
      const { errors, data, took } = await this.request(graphqlQuery);

      if (this.options?.debug) {
         this.options.logger(JSON.stringify(data, null, 2));
         this.options.logger(`${took}ms`);
      }

      return { errors, data: data?.data[rootQueryName] };
   }
}
