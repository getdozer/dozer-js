/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dozer.auth";

/** The _common_ gRPC API handles Pull and Push queries of all endpoints with a single service, `AuthGrpcService`. */

/** Request for `GetAuthTokenRequest`. */
export interface GetAuthTokenRequest {
  accessFilter: string;
}

/** Response for `GetAuthTokenResponse`. */
export interface GetAuthTokenResponse {
  /** Generate token for access */
  token: string;
}

function createBaseGetAuthTokenRequest(): GetAuthTokenRequest {
  return { accessFilter: "" };
}

export const GetAuthTokenRequest = {
  encode(message: GetAuthTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessFilter !== "") {
      writer.uint32(10).string(message.accessFilter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessFilter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthTokenRequest {
    return { accessFilter: isSet(object.accessFilter) ? String(object.accessFilter) : "" };
  },

  toJSON(message: GetAuthTokenRequest): unknown {
    const obj: any = {};
    message.accessFilter !== undefined && (obj.accessFilter = message.accessFilter);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthTokenRequest>, I>>(base?: I): GetAuthTokenRequest {
    return GetAuthTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthTokenRequest>, I>>(object: I): GetAuthTokenRequest {
    const message = createBaseGetAuthTokenRequest();
    message.accessFilter = object.accessFilter ?? "";
    return message;
  },
};

function createBaseGetAuthTokenResponse(): GetAuthTokenResponse {
  return { token: "" };
}

export const GetAuthTokenResponse = {
  encode(message: GetAuthTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthTokenResponse {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: GetAuthTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthTokenResponse>, I>>(base?: I): GetAuthTokenResponse {
    return GetAuthTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthTokenResponse>, I>>(object: I): GetAuthTokenResponse {
    const message = createBaseGetAuthTokenResponse();
    message.token = object.token ?? "";
    return message;
  },
};

/** AuthGrpcService allows developers to generate JWT token for restricted access to data. */
export interface AuthGrpcService {
  /** Creates auth token with custom access */
  getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
}

export class AuthGrpcServiceClientImpl implements AuthGrpcService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "dozer.auth.AuthGrpcService";
    this.rpc = rpc;
    this.getAuthToken = this.getAuthToken.bind(this);
  }
  getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    const data = GetAuthTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getAuthToken", data);
    return promise.then((data) => GetAuthTokenResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
