export interface DozerQuery {
    orderBy?: null | OrderByParam
    limit?: number,
    skip?: number,
    filter?: DozerFilter
}

export interface OrderByParam {
    [column: string]: Order
}

export enum Order {
    ASC = 'asc',
    DESC = 'desc'
}

export interface DozerFilter {
    [column: string]: Filter | string | number | null
}

export type Filter = {
    [operator in FilterOperator]?: string | number | null;
};

export enum FilterOperator {
    LT = '$lt',
    LTE = '$lte',
    EQ = '$eq',
    GT = '$gt',
    GTE = '$gte',
    CONTAINS = '$contains',
    MATCHES_ANY = '$matches_any',
    MATCHES_ALL = '$matches_all',
}

export class QueryHelper {
    static convertSchema(query: DozerQuery): string {
        let jsonObject = {};
        if (query.filter) {
            jsonObject['$filter'] = query.filter;
        }
        if (query.limit) {
            jsonObject['$limit'] = query.limit;
        }
        if (query.skip) {
            jsonObject['$skip'] = query.skip;
        }
        if (query.orderBy) {
            jsonObject['$order_by'] = query.orderBy;
        }

        return JSON.stringify(jsonObject);
    }
}