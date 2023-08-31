/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { map } from "rxjs/operators";
import { EventFilter, FieldDefinition, Operation, RecordWithId } from "./types";
export const protobufPackage = "dozer.common";
function createBaseQueryRequest() {
    return { endpoint: "", query: undefined };
}
export const QueryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.query !== undefined) {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return QueryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryRequest();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseCountResponse() {
    return { count: 0 };
}
export const CountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return CountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCountResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseOnEventRequest() {
    return { endpoints: {} };
}
export const OnEventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.endpoints).forEach(([key, value]) => {
            OnEventRequest_EndpointsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = OnEventRequest_EndpointsEntry.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            endpoints: isObject(object.endpoints)
                ? Object.entries(object.endpoints).reduce((acc, [key, value]) => {
                    acc[key] = EventFilter.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.endpoints = {};
        if (message.endpoints) {
            Object.entries(message.endpoints).forEach(([k, v]) => {
                obj.endpoints[k] = EventFilter.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return OnEventRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOnEventRequest();
        message.endpoints = Object.entries((_a = object.endpoints) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = EventFilter.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseOnEventRequest_EndpointsEntry() {
    return { key: "", value: undefined };
}
export const OnEventRequest_EndpointsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            EventFilter.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnEventRequest_EndpointsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = EventFilter.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? EventFilter.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? EventFilter.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return OnEventRequest_EndpointsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOnEventRequest_EndpointsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? EventFilter.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseGetFieldsRequest() {
    return { endpoint: "" };
}
export const GetFieldsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return GetFieldsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetFieldsRequest();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetFieldsResponse() {
    return { primaryIndex: [], fields: [] };
}
export const GetFieldsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.primaryIndex) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.fields) {
            FieldDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.fields.push(FieldDefinition.decode(reader, reader.uint32()));
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
            primaryIndex: Array.isArray(object === null || object === void 0 ? void 0 : object.primaryIndex) ? object.primaryIndex.map((e) => Number(e)) : [],
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map((e) => FieldDefinition.fromJSON(e)) : [],
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
            obj.fields = message.fields.map((e) => e ? FieldDefinition.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return GetFieldsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetFieldsResponse();
        message.primaryIndex = ((_a = object.primaryIndex) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.fields = ((_b = object.fields) === null || _b === void 0 ? void 0 : _b.map((e) => FieldDefinition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryResponse() {
    return { fields: [], records: [] };
}
export const QueryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fields) {
            FieldDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.records) {
            RecordWithId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields.push(FieldDefinition.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.records.push(RecordWithId.decode(reader, reader.uint32()));
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
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map((e) => FieldDefinition.fromJSON(e)) : [],
            records: Array.isArray(object === null || object === void 0 ? void 0 : object.records) ? object.records.map((e) => RecordWithId.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? FieldDefinition.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        if (message.records) {
            obj.records = message.records.map((e) => e ? RecordWithId.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    create(base) {
        return QueryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryResponse();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map((e) => FieldDefinition.fromPartial(e))) || [];
        message.records = ((_b = object.records) === null || _b === void 0 ? void 0 : _b.map((e) => RecordWithId.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetEndpointsRequest() {
    return {};
}
export const GetEndpointsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return GetEndpointsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetEndpointsRequest();
        return message;
    },
};
function createBaseGetEndpointsResponse() {
    return { endpoints: [] };
}
export const GetEndpointsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.endpoints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return { endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints) ? object.endpoints.map((e) => String(e)) : [] };
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
        return GetEndpointsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEndpointsResponse();
        message.endpoints = ((_a = object.endpoints) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
export class CommonGrpcServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.common.CommonGrpcService";
        this.rpc = rpc;
        this.count = this.count.bind(this);
        this.query = this.query.bind(this);
        this.OnEvent = this.OnEvent.bind(this);
        this.getEndpoints = this.getEndpoints.bind(this);
        this.getFields = this.getFields.bind(this);
    }
    count(request) {
        const data = QueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "count", data);
        return promise.then((data) => CountResponse.decode(new _m0.Reader(data)));
    }
    query(request) {
        const data = QueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "query", data);
        return promise.then((data) => QueryResponse.decode(new _m0.Reader(data)));
    }
    OnEvent(request) {
        const data = OnEventRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, "OnEvent", data);
        return result.pipe(map((data) => Operation.decode(new _m0.Reader(data))));
    }
    getEndpoints(request) {
        const data = GetEndpointsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getEndpoints", data);
        return promise.then((data) => GetEndpointsResponse.decode(new _m0.Reader(data)));
    }
    getFields(request) {
        const data = GetFieldsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getFields", data);
        return promise.then((data) => GetFieldsResponse.decode(new _m0.Reader(data)));
    }
}
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
