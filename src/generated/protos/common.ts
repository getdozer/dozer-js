/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { EventType, eventTypeFromJSON, eventTypeToJSON, FieldDefinition, Operation, RecordWithId } from "./types";

export const protobufPackage = "dozer.common";

/** The _common_ gRPC API handles Pull and Push queries of all endpoints with a single service, `CommonGrpcService`. */

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

  create<I extends Exact<DeepPartial<QueryRequest>, I>>(base?: I): QueryRequest {
    return QueryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequest>, I>>(object: I): QueryRequest {
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

  create<I extends Exact<DeepPartial<CountResponse>, I>>(base?: I): CountResponse {
    return CountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountResponse>, I>>(object: I): CountResponse {
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

  create<I extends Exact<DeepPartial<OnEventRequest>, I>>(base?: I): OnEventRequest {
    return OnEventRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OnEventRequest>, I>>(object: I): OnEventRequest {
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

  create<I extends Exact<DeepPartial<GetFieldsRequest>, I>>(base?: I): GetFieldsRequest {
    return GetFieldsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFieldsRequest>, I>>(object: I): GetFieldsRequest {
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

  create<I extends Exact<DeepPartial<GetFieldsResponse>, I>>(base?: I): GetFieldsResponse {
    return GetFieldsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFieldsResponse>, I>>(object: I): GetFieldsResponse {
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

  create<I extends Exact<DeepPartial<QueryResponse>, I>>(base?: I): QueryResponse {
    return QueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
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

  create<I extends Exact<DeepPartial<GetEndpointsRequest>, I>>(base?: I): GetEndpointsRequest {
    return GetEndpointsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEndpointsRequest>, I>>(_: I): GetEndpointsRequest {
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

  create<I extends Exact<DeepPartial<GetEndpointsResponse>, I>>(base?: I): GetEndpointsResponse {
    return GetEndpointsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEndpointsResponse>, I>>(object: I): GetEndpointsResponse {
    const message = createBaseGetEndpointsResponse();
    message.endpoints = object.endpoints?.map((e) => e) || [];
    return message;
  },
};

/**
 * CommonGrpcService allows developers to query data from various endpoints.
 *
 * The service supports both Pull and Push queries. It provides methods to return metadata about the fields that can be used to construct the data types dynamically.
 *
 * This is preferred while working with libraries or in the case of dynamic scenarios and interpreted languages.
 */
export interface CommonGrpcService {
  /**
   * Counts the number of records satisfying the given query. See [Query](../query) for the query format.
   *
   * If no query is specified, total number of records will be returned.
   */
  count(request: QueryRequest): Promise<CountResponse>;
  /**
   * Performs query on an endpoint. See [Query](../query) for the query format.
   *
   * If no query is specified, the first 50 records will be returned.
   */
  query(request: QueryRequest): Promise<QueryResponse>;
  /**
   * Subscribes to the Dozer event stream, optionally applies a filter. See [Query](../query) for the filter format.
   *
   * This API is unstable and may change in the future.
   */
  OnEvent(request: OnEventRequest): Observable<Operation>;
  /** Gets all the endpoints Dozer is currently serving. */
  getEndpoints(request: GetEndpointsRequest): Promise<GetEndpointsResponse>;
  /** Gets the field description of an endpoint. */
  getFields(request: GetFieldsRequest): Promise<GetFieldsResponse>;
}

export class CommonGrpcServiceClientImpl implements CommonGrpcService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "dozer.common.CommonGrpcService";
    this.rpc = rpc;
    this.count = this.count.bind(this);
    this.query = this.query.bind(this);
    this.OnEvent = this.OnEvent.bind(this);
    this.getEndpoints = this.getEndpoints.bind(this);
    this.getFields = this.getFields.bind(this);
  }
  count(request: QueryRequest): Promise<CountResponse> {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "count", data);
    return promise.then((data) => CountResponse.decode(new _m0.Reader(data)));
  }

  query(request: QueryRequest): Promise<QueryResponse> {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "query", data);
    return promise.then((data) => QueryResponse.decode(new _m0.Reader(data)));
  }

  OnEvent(request: OnEventRequest): Observable<Operation> {
    const data = OnEventRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "OnEvent", data);
    return result.pipe(map((data) => Operation.decode(new _m0.Reader(data))));
  }

  getEndpoints(request: GetEndpointsRequest): Promise<GetEndpointsResponse> {
    const data = GetEndpointsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getEndpoints", data);
    return promise.then((data) => GetEndpointsResponse.decode(new _m0.Reader(data)));
  }

  getFields(request: GetFieldsRequest): Promise<GetFieldsResponse> {
    const data = GetFieldsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getFields", data);
    return promise.then((data) => GetFieldsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
