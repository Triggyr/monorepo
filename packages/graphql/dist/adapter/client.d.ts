import { type AxiosInstance } from 'axios';
import type { DeepPick, GraphqlBoolExp, GraphqlInsertTypes, GraphqlOptions, GraphqlResponse, GraphqlSelectOptions, GraphqlSelectTypes, GraphqlUpdateTypes, NonEmptyArr, ObjectPaths, ObjectPathsWithArray, PropertyValuexxx } from './types';
declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {
    }
}
export default abstract class GraphqlClient {
    protected options: Required<GraphqlOptions>;
    protected dbClient: AxiosInstance;
    constructor(options: GraphqlOptions);
    private _initializeResponseInterceptor;
    private _handleResponse;
    private _handleError;
    private getHeaders;
    private getRootQueryName;
    request(graphqlQuery: {
        query: string;
        variables?: {
            limit?: number;
            offset?: number;
            [x: string]: any;
        };
    }): Promise<{
        errors: any;
        data: any | null;
        took: number;
    }>;
    insert<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>>(entityName: EntityName, objects: GraphqlInsertTypes[EntityName][], fields: NonEmptyArr<ResponseKeys>): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[]>>;
    insertOne<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>>(entityName: EntityName, objects: GraphqlInsertTypes[EntityName], fields: NonEmptyArr<ResponseKeys>): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys> | null>>;
    update<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName] & {
        _affected_rows: number;
    }>>(entityName: EntityName, objects: GraphqlUpdateTypes[EntityName], fields: NonEmptyArr<ResponseKeys>, options: {
        where: GraphqlBoolExp<EntityName>;
    }): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName] & {
        affected_rows: number;
    }, ResponseKeys>[]>>;
    select<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>>(entityName: EntityName, fields: NonEmptyArr<ResponseKeys>, options?: GraphqlSelectOptions<EntityName>): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[]>>;
    selectOne<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>>(entityName: EntityName, fields: NonEmptyArr<ResponseKeys>, options?: GraphqlSelectOptions<EntityName>): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys> | null>>;
    selectBatch<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>>(batch: {
        entityName: EntityName;
        fields: NonEmptyArr<ResponseKeys>;
        options?: GraphqlSelectOptions<EntityName>;
    }[]): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>[][] | null>>;
    selectByPk<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName]>, EntityRootKeys extends ObjectPaths<GraphqlSelectTypes[EntityName]>>(entityName: EntityName, fields: NonEmptyArr<ResponseKeys>, pk: {
        pkName: EntityRootKeys;
        pkValue: PropertyValuexxx<GraphqlSelectTypes[EntityName], EntityRootKeys>;
    }): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName], ResponseKeys>>>;
    delete<EntityName extends keyof GraphqlSelectTypes, ResponseKeys extends ObjectPathsWithArray<GraphqlSelectTypes[EntityName] & {
        _affected_rows: number;
    }>>(entityName: EntityName, fields: NonEmptyArr<ResponseKeys>, options: {
        where: GraphqlBoolExp<EntityName>;
    }): Promise<GraphqlResponse<any, DeepPick<GraphqlSelectTypes[EntityName] & {
        affected_rows: number;
    }, ResponseKeys>[]>>;
    aggregate<EntityName extends keyof GraphqlSelectTypes>(entityName: EntityName, options?: {
        where: GraphqlBoolExp<EntityName>;
    }): Promise<GraphqlResponse<any, {
        aggregate: {
            count: number;
        };
    }>>;
}
