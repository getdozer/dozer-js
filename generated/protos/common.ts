/* eslint-disable */
import * as Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { EventType, eventTypeFromJSON, eventTypeToJSON, FieldDefinition, Operation, RecordWithId } from "./types";

export const protobufPackage = "dozer.common";

/**
 * The _common_ gRPC API handles Pull and Push queries of all endpoints with a
 * single service, `CommonGrpcService`.
 */

/** Request for `count` and `query`. */
export interface QueryRequest {
  /** The name of the endpoint to query. */
  endpoint: string;
  /** JSON query string. */
  query?: string | undefined;
}

/** Response for `count`. */
export interface CountResponse {
  /** The number of records satisfying the query. */
  count: number;
}

/** Request for `OnEvent`. */
export interface OnEventRequest {
  /** The event type to subscribe to. */
  type: EventType;
  /** The name of the endpoint to subscribe to. */
  endpoint: string;
  /** JSON filter string. */
  filter?: string | undefined;
}

/** Request for `getFields`. */
export interface GetFieldsRequest {
  /** The endpoint name. */
  endpoint: string;
}

/** Response for `getFields`. */
export interface GetFieldsResponse {
  /** The list of indexes of the keys that are used as the primary index. */
  primaryIndex: number[];
  /** The list of field definitions. */
  fields: FieldDefinition[];
}

/** Response for `query`. */
export interface QueryResponse {
  /** The list of field definitions. */
  fields: FieldDefinition[];
  /** The list of record data. */
  records: RecordWithId[];
}

/** Request for `getEndpoints`. */
export interface GetEndpointsRequest {
}

/** Response for `getEndpoints`. */
export interface GetEndpointsResponse {
  /** List of endpoint names. */
  endpoints: string[];
}

function createBaseQueryRequest(): QueryRequest {
  return { endpoint: "", query: undefined };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
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

  fromJSON(object: any): QueryRequest {
    return {
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      query: isSet(object.query) ? String(object.query) : undefined,
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  create(base?: DeepPartial<QueryRequest>): QueryRequest {
    return QueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.endpoint = object.endpoint ?? "";
    message.query = object.query ?? undefined;
    return message;
  },
};

function createBaseCountResponse(): CountResponse {
  return { count: 0 };
}

export const CountResponse = {
  encode(message: CountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountResponse {
    return { count: isSet(object.count) ? Number(object.count) : 0 };
  },

  toJSON(message: CountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create(base?: DeepPartial<CountResponse>): CountResponse {
    return CountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CountResponse>): CountResponse {
    const message = createBaseCountResponse();
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseOnEventRequest(): OnEventRequest {
  return { type: 0, endpoint: "", filter: undefined };
}

export const OnEventRequest = {
  encode(message: OnEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OnEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
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

  fromJSON(object: any): OnEventRequest {
    return {
      type: isSet(object.type) ? eventTypeFromJSON(object.type) : 0,
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      filter: isSet(object.filter) ? String(object.filter) : undefined,
    };
  },

  toJSON(message: OnEventRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eventTypeToJSON(message.type));
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  create(base?: DeepPartial<OnEventRequest>): OnEventRequest {
    return OnEventRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OnEventRequest>): OnEventRequest {
    const message = createBaseOnEventRequest();
    message.type = object.type ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.filter = object.filter ?? undefined;
    return message;
  },
};

function createBaseGetFieldsRequest(): GetFieldsRequest {
  return { endpoint: "" };
}

export const GetFieldsRequest = {
  encode(message: GetFieldsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldsRequest {
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

  fromJSON(object: any): GetFieldsRequest {
    return { endpoint: isSet(object.endpoint) ? String(object.endpoint) : "" };
  },

  toJSON(message: GetFieldsRequest): unknown {
    const obj: any = {};
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    return obj;
  },

  create(base?: DeepPartial<GetFieldsRequest>): GetFieldsRequest {
    return GetFieldsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetFieldsRequest>): GetFieldsRequest {
    const message = createBaseGetFieldsRequest();
    message.endpoint = object.endpoint ?? "";
    return message;
  },
};

function createBaseGetFieldsResponse(): GetFieldsResponse {
  return { primaryIndex: [], fields: [] };
}

export const GetFieldsResponse = {
  encode(message: GetFieldsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.primaryIndex) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.fields) {
      FieldDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldsResponse {
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
          } else {
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

  fromJSON(object: any): GetFieldsResponse {
    return {
      primaryIndex: Array.isArray(object?.primaryIndex) ? object.primaryIndex.map((e: any) => Number(e)) : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => FieldDefinition.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetFieldsResponse): unknown {
    const obj: any = {};
    if (message.primaryIndex) {
      obj.primaryIndex = message.primaryIndex.map((e) => Math.round(e));
    } else {
      obj.primaryIndex = [];
    }
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? FieldDefinition.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetFieldsResponse>): GetFieldsResponse {
    return GetFieldsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetFieldsResponse>): GetFieldsResponse {
    const message = createBaseGetFieldsResponse();
    message.primaryIndex = object.primaryIndex?.map((e) => e) || [];
    message.fields = object.fields?.map((e) => FieldDefinition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { fields: [], records: [] };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      FieldDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.records) {
      RecordWithId.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
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

  fromJSON(object: any): QueryResponse {
    return {
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => FieldDefinition.fromJSON(e)) : [],
      records: Array.isArray(object?.records) ? object.records.map((e: any) => RecordWithId.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? FieldDefinition.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    if (message.records) {
      obj.records = message.records.map((e) => e ? RecordWithId.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryResponse>): QueryResponse {
    return QueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.fields = object.fields?.map((e) => FieldDefinition.fromPartial(e)) || [];
    message.records = object.records?.map((e) => RecordWithId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetEndpointsRequest(): GetEndpointsRequest {
  return {};
}

export const GetEndpointsRequest = {
  encode(_: GetEndpointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointsRequest {
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

  fromJSON(_: any): GetEndpointsRequest {
    return {};
  },

  toJSON(_: GetEndpointsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetEndpointsRequest>): GetEndpointsRequest {
    return GetEndpointsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetEndpointsRequest>): GetEndpointsRequest {
    const message = createBaseGetEndpointsRequest();
    return message;
  },
};

function createBaseGetEndpointsResponse(): GetEndpointsResponse {
  return { endpoints: [] };
}

export const GetEndpointsResponse = {
  encode(message: GetEndpointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.endpoints) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointsResponse {
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

  fromJSON(object: any): GetEndpointsResponse {
    return { endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetEndpointsResponse): unknown {
    const obj: any = {};
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) => e);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetEndpointsResponse>): GetEndpointsResponse {
    return GetEndpointsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEndpointsResponse>): GetEndpointsResponse {
    const message = createBaseGetEndpointsResponse();
    message.endpoints = object.endpoints?.map((e) => e) || [];
    return message;
  },
};

/**
 * CommonGrpcService allows developers to query data from various endpoints.
 *
 * The service supports both Pull and Push queries. It provides methods to
 * return metadata about the fields that can be used to construct the data types
 * dynamically.
 *
 * This is preferred while working with libraries or in the case of dynamic
 * scenarios and interpreted languages.
 */
export type CommonGrpcServiceDefinition = typeof CommonGrpcServiceDefinition;
export const CommonGrpcServiceDefinition = {
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
      requestType: QueryRequest,
      requestStream: false,
      responseType: CountResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Performs query on an endpoint. See [Query](../query) for the query format.
     *
     * If no query is specified, the first 50 records will be returned.
     */
    query: {
      name: "query",
      requestType: QueryRequest,
      requestStream: false,
      responseType: QueryResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Subscribes to the Dozer event stream, optionally applies a filter. See
     * [Query](../query) for the filter format.
     *
     * This API is unstable and may change in the future.
     */
    onEvent: {
      name: "OnEvent",
      requestType: OnEventRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: true,
      options: {},
    },
    /** Gets all the endpoints Dozer is currently serving. */
    getEndpoints: {
      name: "getEndpoints",
      requestType: GetEndpointsRequest,
      requestStream: false,
      responseType: GetEndpointsResponse,
      responseStream: false,
      options: {},
    },
    /** Gets the field description of an endpoint. */
    getFields: {
      name: "getFields",
      requestType: GetFieldsRequest,
      requestStream: false,
      responseType: GetFieldsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CommonGrpcServiceImplementation<CallContextExt = {}> {
  /**
   * Counts the number of records satisfying the given query. See
   * [Query](../query) for the query format.
   *
   * If no query is specified, total number of records will be returned.
   */
  count(request: QueryRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CountResponse>>;
  /**
   * Performs query on an endpoint. See [Query](../query) for the query format.
   *
   * If no query is specified, the first 50 records will be returned.
   */
  query(request: QueryRequest, context: CallContext & CallContextExt): Promise<DeepPartial<QueryResponse>>;
  /**
   * Subscribes to the Dozer event stream, optionally applies a filter. See
   * [Query](../query) for the filter format.
   *
   * This API is unstable and may change in the future.
   */
  onEvent(
    request: OnEventRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<Operation>>;
  /** Gets all the endpoints Dozer is currently serving. */
  getEndpoints(
    request: GetEndpointsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetEndpointsResponse>>;
  /** Gets the field description of an endpoint. */
  getFields(request: GetFieldsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFieldsResponse>>;
}

export interface CommonGrpcServiceClient<CallOptionsExt = {}> {
  /**
   * Counts the number of records satisfying the given query. See
   * [Query](../query) for the query format.
   *
   * If no query is specified, total number of records will be returned.
   */
  count(request: DeepPartial<QueryRequest>, options?: CallOptions & CallOptionsExt): Promise<CountResponse>;
  /**
   * Performs query on an endpoint. See [Query](../query) for the query format.
   *
   * If no query is specified, the first 50 records will be returned.
   */
  query(request: DeepPartial<QueryRequest>, options?: CallOptions & CallOptionsExt): Promise<QueryResponse>;
  /**
   * Subscribes to the Dozer event stream, optionally applies a filter. See
   * [Query](../query) for the filter format.
   *
   * This API is unstable and may change in the future.
   */
  onEvent(request: DeepPartial<OnEventRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<Operation>;
  /** Gets all the endpoints Dozer is currently serving. */
  getEndpoints(
    request: DeepPartial<GetEndpointsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetEndpointsResponse>;
  /** Gets the field description of an endpoint. */
  getFields(request: DeepPartial<GetFieldsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFieldsResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
