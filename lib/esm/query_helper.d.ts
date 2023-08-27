export interface DozerQuery {
    orderBy?: null | OrderByParam;
    limit?: number;
    skip?: number;
    filter?: DozerFilter;
}
export interface OrderByParam {
    [column: string]: Order;
}
export declare enum Order {
    ASC = "asc",
    DESC = "desc"
}
export interface DozerFilter {
    [column: string]: Filter | string | number | null;
}
export type Filter = {
    [operator in FilterOperator]?: string | number | null;
};
export declare enum FilterOperator {
    LT = "$lt",
    LTE = "$lte",
    EQ = "$eq",
    GT = "$gt",
    GTE = "$gte",
    CONTAINS = "$contains",
    MATCHES_ANY = "$matches_any",
    MATCHES_ALL = "$matches_all"
}
export declare class QueryHelper {
    static convertFilter(filter: DozerFilter): string;
    static convertSchema(query: DozerQuery): string;
}
