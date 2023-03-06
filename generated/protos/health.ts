/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "dozer.health";

/** The _health_ gRPC API checks health of all services, `HealthGrpcService`. */

/** Request for `healthCheck` and `healthWatch`. */
export interface HealthCheckRequest {
  service: string;
}

/** Response for `healthCheck` and `healthWatch`. */
export interface HealthCheckResponse {
  status: HealthCheckResponse_ServingStatus;
}

export enum HealthCheckResponse_ServingStatus {
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
  /** SERVICE_UNKNOWN - Used only by the Watch method. */
  SERVICE_UNKNOWN = 3,
  UNRECOGNIZED = -1,
}

export function healthCheckResponse_ServingStatusFromJSON(object: any): HealthCheckResponse_ServingStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return HealthCheckResponse_ServingStatus.UNKNOWN;
    case 1:
    case "SERVING":
      return HealthCheckResponse_ServingStatus.SERVING;
    case 2:
    case "NOT_SERVING":
      return HealthCheckResponse_ServingStatus.NOT_SERVING;
    case 3:
    case "SERVICE_UNKNOWN":
      return HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HealthCheckResponse_ServingStatus.UNRECOGNIZED;
  }
}

export function healthCheckResponse_ServingStatusToJSON(object: HealthCheckResponse_ServingStatus): string {
  switch (object) {
    case HealthCheckResponse_ServingStatus.UNKNOWN:
      return "UNKNOWN";
    case HealthCheckResponse_ServingStatus.SERVING:
      return "SERVING";
    case HealthCheckResponse_ServingStatus.NOT_SERVING:
      return "NOT_SERVING";
    case HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN:
      return "SERVICE_UNKNOWN";
    case HealthCheckResponse_ServingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return { service: "" };
}

export const HealthCheckRequest = {
  encode(message: HealthCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HealthCheckRequest {
    return { service: isSet(object.service) ? String(object.service) : "" };
  },

  toJSON(message: HealthCheckRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  create(base?: DeepPartial<HealthCheckRequest>): HealthCheckRequest {
    return HealthCheckRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HealthCheckRequest>): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { status: 0 };
}

export const HealthCheckResponse = {
  encode(message: HealthCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResponse {
    return { status: isSet(object.status) ? healthCheckResponse_ServingStatusFromJSON(object.status) : 0 };
  },

  toJSON(message: HealthCheckResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = healthCheckResponse_ServingStatusToJSON(message.status));
    return obj;
  },

  create(base?: DeepPartial<HealthCheckResponse>): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HealthCheckResponse>): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

/** The health service that checks health on services. */
export type HealthGrpcServiceDefinition = typeof HealthGrpcServiceDefinition;
export const HealthGrpcServiceDefinition = {
  name: "HealthGrpcService",
  fullName: "dozer.health.HealthGrpcService",
  methods: {
    /** Get function for health check */
    healthCheck: {
      name: "healthCheck",
      requestType: HealthCheckRequest,
      requestStream: false,
      responseType: HealthCheckResponse,
      responseStream: false,
      options: {},
    },
    /** Get function for health check watch */
    healthWatch: {
      name: "healthWatch",
      requestType: HealthCheckRequest,
      requestStream: false,
      responseType: HealthCheckResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface HealthGrpcServiceImplementation<CallContextExt = {}> {
  /** Get function for health check */
  healthCheck(
    request: HealthCheckRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<HealthCheckResponse>>;
  /** Get function for health check watch */
  healthWatch(
    request: HealthCheckRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<HealthCheckResponse>>;
}

export interface HealthGrpcServiceClient<CallOptionsExt = {}> {
  /** Get function for health check */
  healthCheck(
    request: DeepPartial<HealthCheckRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<HealthCheckResponse>;
  /** Get function for health check watch */
  healthWatch(
    request: DeepPartial<HealthCheckRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<HealthCheckResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
