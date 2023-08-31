"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHelper = exports.FilterOperator = exports.Order = void 0;
var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order = exports.Order || (exports.Order = {}));
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["LT"] = "$lt";
    FilterOperator["LTE"] = "$lte";
    FilterOperator["EQ"] = "$eq";
    FilterOperator["GT"] = "$gt";
    FilterOperator["GTE"] = "$gte";
    FilterOperator["CONTAINS"] = "$contains";
    FilterOperator["MATCHES_ANY"] = "$matches_any";
    FilterOperator["MATCHES_ALL"] = "$matches_all";
})(FilterOperator = exports.FilterOperator || (exports.FilterOperator = {}));
var QueryHelper = /** @class */ (function () {
    function QueryHelper() {
    }
    QueryHelper.convertFilter = function (filter) {
        return JSON.stringify(filter);
    };
    QueryHelper.convertSchema = function (query) {
        var jsonObject = {};
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
    };
    return QueryHelper;
}());
exports.QueryHelper = QueryHelper;
