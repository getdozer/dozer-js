"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonGrpcServiceClientImpl = exports.GetEndpointsResponse = exports.GetEndpointsRequest = exports.QueryResponse = exports.GetFieldsResponse = exports.GetFieldsRequest = exports.OnEventRequest_EndpointsEntry = exports.OnEventRequest = exports.CountResponse = exports.QueryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var operators_1 = require("rxjs/operators");
var types_1 = require("./types");
exports.protobufPackage = "dozer.common";
function createBaseQueryRequest() {
    return { endpoint: "", query: undefined };
}
exports.QueryRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.query !== undefined) {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            query: isSet(object.query) ? String(object.query) : undefined,
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
    },
};
function createBaseCountResponse() {
    return { count: 0 };
}
exports.CountResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    },
};
function createBaseOnEventRequest() {
    return { endpoints: {} };
}
exports.OnEventRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        Object.entries(message.endpoints).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.OnEventRequest_EndpointsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOnEventRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.OnEventRequest_EndpointsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.endpoints[entry1.key] = entry1.value;
                    }
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
            endpoints: isObject(object.endpoints)
                ? Object.entries(object.endpoints).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = types_1.EventFilter.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.endpoints = {};
        if (message.endpoints) {
            Object.entries(message.endpoints).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.endpoints[k] = types_1.EventFilter.toJSON(v);
            });
        }
        return obj;
    },
    create: function (base) {
        return exports.OnEventRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOnEventRequest();
        message.endpoints = Object.entries((_a = object.endpoints) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = types_1.EventFilter.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseOnEventRequest_EndpointsEntry() {
    return { key: "", value: undefined };
}
exports.OnEventRequest_EndpointsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            types_1.EventFilter.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOnEventRequest_EndpointsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = types_1.EventFilter.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? types_1.EventFilter.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? types_1.EventFilter.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.OnEventRequest_EndpointsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOnEventRequest_EndpointsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? types_1.EventFilter.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseGetFieldsRequest() {
    return { endpoint: "" };
}
exports.GetFieldsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    },
};
function createBaseGetFieldsResponse() {
    return { primaryIndex: [], fields: [] };
}
exports.GetFieldsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map(function (e) { return types_1.FieldDefinition.fromJSON(e); }) : [],
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
    },
};
function createBaseQueryResponse() {
    return { fields: [], records: [] };
}
exports.QueryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            records: Array.isArray(object === null || object === void 0 ? void 0 : object.records) ? object.records.map(function (e) { return types_1.RecordWithId.fromJSON(e); }) : [],
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
    },
};
function createBaseGetEndpointsRequest() {
    return {};
}
exports.GetEndpointsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    },
};
function createBaseGetEndpointsResponse() {
    return { endpoints: [] };
}
exports.GetEndpointsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.endpoints; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    },
};
var CommonGrpcServiceClientImpl = /** @class */ (function () {
    function CommonGrpcServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.common.CommonGrpcService";
        this.rpc = rpc;
        this.count = this.count.bind(this);
        this.query = this.query.bind(this);
        this.OnEvent = this.OnEvent.bind(this);
        this.getEndpoints = this.getEndpoints.bind(this);
        this.getFields = this.getFields.bind(this);
    }
    CommonGrpcServiceClientImpl.prototype.count = function (request) {
        var data = exports.QueryRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "count", data);
        return promise.then(function (data) { return exports.CountResponse.decode(new minimal_1.default.Reader(data)); });
    };
    CommonGrpcServiceClientImpl.prototype.query = function (request) {
        var data = exports.QueryRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "query", data);
        return promise.then(function (data) { return exports.QueryResponse.decode(new minimal_1.default.Reader(data)); });
    };
    CommonGrpcServiceClientImpl.prototype.OnEvent = function (request) {
        var data = exports.OnEventRequest.encode(request).finish();
        var result = this.rpc.serverStreamingRequest(this.service, "OnEvent", data);
        return result.pipe((0, operators_1.map)(function (data) { return types_1.Operation.decode(new minimal_1.default.Reader(data)); }));
    };
    CommonGrpcServiceClientImpl.prototype.getEndpoints = function (request) {
        var data = exports.GetEndpointsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "getEndpoints", data);
        return promise.then(function (data) { return exports.GetEndpointsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    CommonGrpcServiceClientImpl.prototype.getFields = function (request) {
        var data = exports.GetFieldsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "getFields", data);
        return promise.then(function (data) { return exports.GetFieldsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return CommonGrpcServiceClientImpl;
}());
exports.CommonGrpcServiceClientImpl = CommonGrpcServiceClientImpl;
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
