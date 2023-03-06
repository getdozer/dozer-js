"use strict";
exports.__esModule = true;
exports.CommonGrpcServiceDefinition = exports.GetEndpointsResponse = exports.GetEndpointsRequest = exports.QueryResponse = exports.GetFieldsResponse = exports.GetFieldsRequest = exports.OnEventRequest = exports.CountResponse = exports.QueryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var types_1 = require("./types");
exports.protobufPackage = "dozer.common";
function createBaseQueryRequest() {
    return { endpoint: "", query: undefined };
}
exports.QueryRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.query !== undefined) {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.string();
                    break;
                case 2:
                    message.query = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            query: isSet(object.query) ? String(object.query) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    create: function (base) {
        return exports.QueryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryRequest();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : undefined;
        return message;
    }
};
function createBaseCountResponse() {
    return { count: 0 };
}
exports.CountResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { count: isSet(object.count) ? Number(object.count) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    create: function (base) {
        return exports.CountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCountResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseOnEventRequest() {
    return { type: 0, endpoint: "", filter: undefined };
}
exports.OnEventRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.endpoint !== "") {
            writer.uint32(18).string(message.endpoint);
        }
        if (message.filter !== undefined) {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOnEventRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.endpoint = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            type: isSet(object.type) ? (0, types_1.eventTypeFromJSON)(object.type) : 0,
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            filter: isSet(object.filter) ? String(object.filter) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = (0, types_1.eventTypeToJSON)(message.type));
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    create: function (base) {
        return exports.OnEventRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseOnEventRequest();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.endpoint = (_b = object.endpoint) !== null && _b !== void 0 ? _b : "";
        message.filter = (_c = object.filter) !== null && _c !== void 0 ? _c : undefined;
        return message;
    }
};
function createBaseGetFieldsRequest() {
    return { endpoint: "" };
}
exports.GetFieldsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFieldsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { endpoint: isSet(object.endpoint) ? String(object.endpoint) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    create: function (base) {
        return exports.GetFieldsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetFieldsRequest();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseGetFieldsResponse() {
    return { primaryIndex: [], fields: [] };
}
exports.GetFieldsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.primaryIndex; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        for (var _b = 0, _c = message.fields; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.FieldDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFieldsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.primaryIndex.push(reader.int32());
                        }
                    }
                    else {
                        message.primaryIndex.push(reader.int32());
                    }
                    break;
                case 2:
                    message.fields.push(types_1.FieldDefinition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            primaryIndex: Array.isArray(object === null || object === void 0 ? void 0 : object.primaryIndex) ? object.primaryIndex.map(function (e) { return Number(e); }) : [],
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map(function (e) { return types_1.FieldDefinition.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.primaryIndex) {
            obj.primaryIndex = message.primaryIndex.map(function (e) { return Math.round(e); });
        }
        else {
            obj.primaryIndex = [];
        }
        if (message.fields) {
            obj.fields = message.fields.map(function (e) { return e ? types_1.FieldDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetFieldsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetFieldsResponse();
        message.primaryIndex = ((_a = object.primaryIndex) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.fields = ((_b = object.fields) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.FieldDefinition.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryResponse() {
    return { fields: [], records: [] };
}
exports.QueryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.fields; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.FieldDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.records; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.RecordWithId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields.push(types_1.FieldDefinition.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.records.push(types_1.RecordWithId.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map(function (e) { return types_1.FieldDefinition.fromJSON(e); }) : [],
            records: Array.isArray(object === null || object === void 0 ? void 0 : object.records) ? object.records.map(function (e) { return types_1.RecordWithId.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.fields) {
            obj.fields = message.fields.map(function (e) { return e ? types_1.FieldDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.fields = [];
        }
        if (message.records) {
            obj.records = message.records.map(function (e) { return e ? types_1.RecordWithId.toJSON(e) : undefined; });
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.QueryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryResponse();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.FieldDefinition.fromPartial(e); })) || [];
        message.records = ((_b = object.records) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.RecordWithId.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseGetEndpointsRequest() {
    return {};
}
exports.GetEndpointsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEndpointsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetEndpointsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetEndpointsRequest();
        return message;
    }
};
function createBaseGetEndpointsResponse() {
    return { endpoints: [] };
}
exports.GetEndpointsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.endpoints; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEndpointsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints) ? object.endpoints.map(function (e) { return String(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map(function (e) { return e; });
        }
        else {
            obj.endpoints = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetEndpointsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetEndpointsResponse();
        message.endpoints = ((_a = object.endpoints) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
exports.CommonGrpcServiceDefinition = {
    name: "CommonGrpcService",
    fullName: "dozer.common.CommonGrpcService",
    methods: {
        /**
         * Counts the number of records satisfying the given query. See
         * [Query](../query) for the query format.
         *
         * If no query is specified, total number of records will be returned.
         */
        count: {
            name: "count",
            requestType: exports.QueryRequest,
            requestStream: false,
            responseType: exports.CountResponse,
            responseStream: false,
            options: {}
        },
        /**
         * Performs query on an endpoint. See [Query](../query) for the query format.
         *
         * If no query is specified, the first 50 records will be returned.
         */
        query: {
            name: "query",
            requestType: exports.QueryRequest,
            requestStream: false,
            responseType: exports.QueryResponse,
            responseStream: false,
            options: {}
        },
        /**
         * Subscribes to the Dozer event stream, optionally applies a filter. See
         * [Query](../query) for the filter format.
         *
         * This API is unstable and may change in the future.
         */
        onEvent: {
            name: "OnEvent",
            requestType: exports.OnEventRequest,
            requestStream: false,
            responseType: types_1.Operation,
            responseStream: true,
            options: {}
        },
        /** Gets all the endpoints Dozer is currently serving. */
        getEndpoints: {
            name: "getEndpoints",
            requestType: exports.GetEndpointsRequest,
            requestStream: false,
            responseType: exports.GetEndpointsResponse,
            responseStream: false,
            options: {}
        },
        /** Gets the field description of an endpoint. */
        getFields: {
            name: "getFields",
            requestType: exports.GetFieldsRequest,
            requestStream: false,
            responseType: exports.GetFieldsResponse,
            responseStream: false,
            options: {}
        }
    }
};
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
