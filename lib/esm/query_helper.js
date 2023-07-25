export var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order || (Order = {}));
export var FilterOperator;
(function (FilterOperator) {
    FilterOperator["LT"] = "$lt";
    FilterOperator["LTE"] = "$lte";
    FilterOperator["EQ"] = "$eq";
    FilterOperator["GT"] = "$gt";
    FilterOperator["GTE"] = "$gte";
    FilterOperator["CONTAINS"] = "$contains";
    FilterOperator["MATCHES_ANY"] = "$matches_any";
    FilterOperator["MATCHES_ALL"] = "$matches_all";
})(FilterOperator || (FilterOperator = {}));
export class QueryHelper {
    static convertFilter(filter) {
        return JSON.stringify(filter);
    }
    static convertSchema(query) {
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
