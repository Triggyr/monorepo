"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
class GraphqlClient {
    options;
    dbClient;
    constructor(options) {
        this.options = {
            ...options,
            debug: options.debug ?? false,
            log_query: options.log_query ?? true,
            logger: options.logger ?? utils_1.logger,
        };
        this.dbClient = axios_1.default.create({ baseURL: this.options.host });
        this._initializeResponseInterceptor();
    }
    _initializeResponseInterceptor = () => {
        this.dbClient.interceptors.response.use(this._handleResponse, this._handleError);
    };
    _handleResponse = ({ data }) => {
        let response = {};
        if (data.errors) {
            response = data;
        }
        else {
            response.data = data;
        }
        return response;
    };
    _handleError = (error) => {
        if (error.response?.status == 500) {
            return Promise.reject('service provider returns server error');
        }
        return Promise.reject(error);
    };
    getHeaders() {
        return {
            ...(this.options?.headers ?? {}),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }
    getRootQueryName(operation, entityName) {
        if (operation === 'aggregate' || operation === 'by_pk')
            return `${entityName}_${operation}`;
        if (operation === 'select')
            return entityName;
        return `${operation}_${entityName}`;
    }
    async request(graphqlQuery) {
        const start = Date.now();
        let data_, took = 0, error = null;
        try {
            let { errors, data } = await this.dbClient.post(this.options?.host, graphqlQuery, {
                headers: this.getHeaders(),
            });
            if (this.options?.log_query)
                this.options.logger({ errors, data });
            error = errors;
            took = Date.now() - start;
            data_ = data;
        }
        catch (error_) {
            error = error_;
        }
        return { errors: error, data: data_, took };
    }
    async insert(entityName, objects, fields) {
        const rootQueryName = this.getRootQueryName('insert', entityName);
        const graphqlQuery = {
            query: `
  			mutation {
  				${rootQueryName} (objects: ${(0, utils_1.toPayload)(objects)}) {
  					returning {
  						${(0, utils_1.resolveFields)(fields)}
  					}
  				}
  			}
  		`,
        };
        if (this.options?.log_query)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger({ errors, data, took });
            this.options.logger(`${took}ms`);
        }
        return { errors, data: data?.data[rootQueryName]?.returning };
    }
    async insertOne(entityName, objects, fields) {
        const { errors, data } = await this.insert(entityName, [objects], fields);
        return { errors, data: data?.[0] ?? null };
    }
    async update(entityName, objects, fields, options) {
        let { where } = options;
        where = {
            ...where,
            deleted_at: { _is_null: true },
        };
        const rootQueryName = this.getRootQueryName('update', entityName);
        const returningFields = fields.filter((field) => field !== '_affected_rows');
        const includeAffectedRows = fields.includes('_affected_rows');
        const graphqlQuery = {
            query: `
              mutation {
                  ${rootQueryName} (where: ${(0, utils_1.toPayload)(where)}, _set: ${(0, utils_1.toPayload)(objects)}) {
                      ${returningFields.length > 0
                ? `
                      returning {
                          ${(0, utils_1.resolveFields)(returningFields)}
                      }`
                : ''}
                      ${includeAffectedRows ? 'affected_rows' : ''}
                  }
              }
          `,
        };
        if (this.options?.log_query)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger(data);
            this.options.logger(`${took}ms`);
        }
        const result = data?.data[rootQueryName];
        return {
            errors,
            data: result?.returning?.map((r) => ({
                ...r,
                affected_rows: result?.affected_rows,
            })),
        };
    }
    async select(entityName, fields, options) {
        let { offset, limit, where, orderBy, queryName } = options || {};
        where = { ...(where ?? {}), deleted_at: { _is_null: true } };
        const rootQueryName = this.getRootQueryName('select', entityName);
        const graphqlQuery = {
            query: `
  			query ${queryName || ''} ($limit: Int, $offset: Int) {
  				${rootQueryName} (
  					limit: $limit,
  					offset: $offset,
  					${where ? `where: ${(0, utils_1.toPayload)(where)},` : ''}
  					${orderBy ? `order_by: ${(0, utils_1.toEnumPayload)(orderBy)},` : ''}
  				) {
  					${(0, utils_1.resolveFields)(fields)}
  				}
  			}
  		`,
            variables: {
                limit,
                offset,
            },
        };
        if (this.options?.log_query)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger(data);
            this.options.logger(`${took}ms`);
        }
        return { errors, data: data?.data[rootQueryName] };
    }
    async selectOne(entityName, fields, options) {
        const { errors, data } = await this.select(entityName, fields, options);
        return { errors, data: data?.[0] ?? null };
    }
    async selectBatch(batch) {
        const getKey = (index) => `query_key_${index}`;
        const batchVariables = {};
        const batchQuery = {};
        let finalQueryName = '';
        batch.forEach((b, index) => {
            const key = getKey(index);
            const options = b.options ?? {};
            const { entityName, fields } = b;
            let { offset, limit, where, orderBy, queryName } = options;
            where = {
                ...where,
                deleted_at: {
                    _is_null: true,
                },
            };
            finalQueryName = queryName || '';
            const rootQueryName = this.getRootQueryName('select', entityName);
            batchVariables[key] = {
                [`${key}_limit`]: limit,
                [`${key}_offset`]: offset,
            };
            batchQuery[key] = `
  			${key}: ${rootQueryName} (
  				limit: $${key}_limit,
  				offset: $${key}_offset,
  				${where ? `where: ${(0, utils_1.toPayload)(where)},` : ''}
  				${orderBy ? `order_by: ${(0, utils_1.toEnumPayload)(orderBy)},` : ''}
  			) {
  				${(0, utils_1.resolveFields)(fields)}
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
        if (this.options?.log_query)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
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
    async selectByPk(entityName, fields, pk) {
        const rootQueryName = this.getRootQueryName('by_pk', entityName);
        const graphqlQuery = {
            query: `
  			query {
  				${rootQueryName} (
  					${pk.pkName}: "${pk.pkValue}"
  				) {
  					${(0, utils_1.resolveFields)(fields)}
  				}
  			}
  		`,
        };
        if (this.options?.debug)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger(JSON.stringify(data, null, 2));
            this.options.logger(`${took}ms`);
        }
        return { errors, data: data?.data[rootQueryName] };
    }
    async delete(entityName, fields, options) {
        let { where } = options;
        where = { ...where, deleted_at: { _is_null: true } };
        const rootQueryName = this.getRootQueryName('delete', entityName);
        const returningFields = fields.filter((field) => field !== '_affected_rows');
        const includeAffectedRows = fields.includes('_affected_rows');
        const graphqlQuery = {
            query: `
  			mutation {
  				${rootQueryName} (where: ${(0, utils_1.toPayload)(where)}) {
            ${returningFields.length > 0
                ? `
                      returning {
                          ${(0, utils_1.resolveFields)(returningFields)}
                      }`
                : ''}
            ${includeAffectedRows ? 'affected_rows' : ''}
  				}
  			}
  		`,
        };
        if (this.options?.debug)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger(JSON.stringify(data, null, 2));
            this.options.logger(`${took}ms`);
        }
        const result = data?.data[rootQueryName];
        return {
            errors,
            data: result?.returning?.map((r) => ({
                ...r,
                affected_rows: result?.affected_rows,
            })),
        };
    }
    async aggregate(entityName, options) {
        let { where } = options || {};
        where = { ...(where ?? {}), deleted_at: { _is_null: true } };
        const rootQueryName = this.getRootQueryName('aggregate', entityName);
        const graphqlQuery = {
            query: `
  			query {
  				${rootQueryName} ${where ? `(where: ${(0, utils_1.toPayload)(where)})` : ''} {
  					aggregate {
  						count
  					}
  				}
  			}
  		`,
        };
        if (this.options?.debug)
            this.options.logger((0, utils_1.prettyGql)(graphqlQuery.query));
        const { errors, data, took } = await this.request(graphqlQuery);
        if (this.options?.debug) {
            this.options.logger(JSON.stringify(data, null, 2));
            this.options.logger(`${took}ms`);
        }
        return { errors, data: data?.data[rootQueryName] };
    }
}
exports.default = GraphqlClient;
