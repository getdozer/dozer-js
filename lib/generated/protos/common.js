"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonGrpcServiceClientImpl = exports.GetEndpointsResponse = exports.GetEndpointsRequest = exports.QueryResponse = exports.GetFieldsResponse = exports.GetFieldsRequest = exports.OnEventRequest = exports.CountResponse = exports.QueryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operators_1 = require("rxjs/operators");
const types_1 = require("./types");
exports.protobufPackage = "dozer.common";
function createBaseQueryRequest() {
    return { endpoint: "", query: undefined };
}
exports.QueryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.query !== undefined) {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            query: isSet(object.query) ? String(object.query) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    create(base) {
        return exports.QueryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryRequest();
        message.endpoint = object.endpoint ?? "";
        message.query = object.query ?? undefined;
        return message;
    },
};
function createBaseCountResponse() {
    return { count: 0 };
}
exports.CountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { count: isSet(object.count) ? Number(object.count) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    create(base) {
        return exports.CountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCountResponse();
        message.count = object.count ?? 0;
        return message;
    },
};
function createBaseOnEventRequest() {
    return { type: 0, endpoint: "", filter: undefined };
}
exports.OnEventRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            type: isSet(object.type) ? (0, types_1.eventTypeFromJSON)(object.type) : 0,
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            filter: isSet(object.filter) ? String(object.filter) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = (0, types_1.eventTypeToJSON)(message.type));
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    create(base) {
        return exports.OnEventRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOnEventRequest();
        message.type = object.type ?? 0;
        message.endpoint = object.endpoint ?? "";
        message.filter = object.filter ?? undefined;
        return message;
    },
};
function createBaseGetFieldsRequest() {
    return { endpoint: "" };
}
exports.GetFieldsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { endpoint: isSet(object.endpoint) ? String(object.endpoint) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    create(base) {
        return exports.GetFieldsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetFieldsRequest();
        message.endpoint = object.endpoint ?? "";
        return message;
    },
};
function createBaseGetFieldsResponse() {
    return { primaryIndex: [], fields: [] };
}
exports.GetFieldsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.primaryIndex) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.fields) {
            types_1.FieldDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
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
    fromJSON(object) {
        return {
            primaryIndex: Array.isArray(object?.primaryIndex) ? object.primaryIndex.map((e) => Number(e)) : [],
            fields: Array.isArray(object?.fields) ? object.fields.map((e) => types_1.FieldDefinition.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.primaryIndex) {
            obj.primaryIndex = message.primaryIndex.map((e) => Math.round(e));
        }
        else {
            obj.primaryIndex = [];
        }
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? types_1.FieldDefinition.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetFieldsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetFieldsResponse();
        message.primaryIndex = object.primaryIndex?.map((e) => e) || [];
        message.fields = object.fields?.map((e) => types_1.FieldDefinition.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryResponse() {
    return { fields: [], records: [] };
}
exports.QueryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.fields) {
            types_1.FieldDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.records) {
            types_1.RecordWithId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            fields: Array.isArray(object?.fields) ? object.fields.map((e) => types_1.FieldDefinition.fromJSON(e)) : [],
            records: Array.isArray(object?.records) ? object.records.map((e) => types_1.RecordWithId.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? types_1.FieldDefinition.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        if (message.records) {
            obj.records = message.records.map((e) => e ? types_1.RecordWithId.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResponse();
        message.fields = object.fields?.map((e) => types_1.FieldDefinition.fromPartial(e)) || [];
        message.records = object.records?.map((e) => types_1.RecordWithId.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetEndpointsRequest() {
    return {};
}
exports.GetEndpointsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEndpointsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetEndpointsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetEndpointsRequest();
        return message;
    },
};
function createBaseGetEndpointsResponse() {
    return { endpoints: [] };
}
exports.GetEndpointsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.endpoints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEndpointsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e);
        }
        else {
            obj.endpoints = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetEndpointsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEndpointsResponse();
        message.endpoints = object.endpoints?.map((e) => e) || [];
        return message;
    },
};
class CommonGrpcServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "dozer.common.CommonGrpcService";
        this.rpc = rpc;
        this.count = this.count.bind(this);
        this.query = this.query.bind(this);
        this.OnEvent = this.OnEvent.bind(this);
        this.getEndpoints = this.getEndpoints.bind(this);
        this.getFields = this.getFields.bind(this);
    }
    count(request) {
        const data = exports.QueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "count", data);
        return promise.then((data) => exports.CountResponse.decode(new minimal_1.default.Reader(data)));
    }
    query(request) {
        const data = exports.QueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "query", data);
        return promise.then((data) => exports.QueryResponse.decode(new minimal_1.default.Reader(data)));
    }
    OnEvent(request) {
        const data = exports.OnEventRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, "OnEvent", data);
        return result.pipe((0, operators_1.map)((data) => types_1.Operation.decode(new minimal_1.default.Reader(data))));
    }
    getEndpoints(request) {
        const data = exports.GetEndpointsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getEndpoints", data);
        return promise.then((data) => exports.GetEndpointsResponse.decode(new minimal_1.default.Reader(data)));
    }
    getFields(request) {
        const data = exports.GetFieldsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getFields", data);
        return promise.then((data) => exports.GetFieldsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.CommonGrpcServiceClientImpl = CommonGrpcServiceClientImpl;
var tsProtoGlobalThis = (() => {
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
function isSet(value) {
    return value !== null && value !== undefined;
}
