import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "dozer.health";
/** The _health_ gRPC API checks health of all services, `HealthGrpcService`. */
/** Request for `healthCheck` and `healthWatch`. */
export interface HealthCheckRequest {
    service: string;
}
/** Response for `healthCheck` and `healthWatch`. */
export interface HealthCheckResponse {
    status: HealthCheckResponse_ServingStatus;
}
export declare enum HealthCheckResponse_ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    SERVICE_UNKNOWN = 3,
    UNRECOGNIZED = -1
}
export declare function healthCheckResponse_ServingStatusFromJSON(object: any): HealthCheckResponse_ServingStatus;
export declare function healthCheckResponse_ServingStatusToJSON(object: HealthCheckResponse_ServingStatus): string;
export declare const HealthCheckRequest: {
    encode(message: HealthCheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest;
    fromJSON(object: any): HealthCheckRequest;
    toJSON(message: HealthCheckRequest): unknown;
    create<I extends {
        service?: string | undefined;
    } & {
        service?: string | undefined;
    } & { [K in Exclude<keyof I, "service">]: never; }>(base?: I | undefined): HealthCheckRequest;
    fromPartial<I_1 extends {
        service?: string | undefined;
    } & {
        service?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): HealthCheckRequest;
};
export declare const HealthCheckResponse: {
    encode(message: HealthCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse;
    fromJSON(object: any): HealthCheckResponse;
    toJSON(message: HealthCheckResponse): unknown;
    create<I extends {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & { [K in Exclude<keyof I, "status">]: never; }>(base?: I | undefined): HealthCheckResponse;
    fromPartial<I_1 extends {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "status">]: never; }>(object: I_1): HealthCheckResponse;
};
/** The health service that checks health on services. */
export interface HealthGrpcService {
    /** Get function for health check */
    healthCheck(request: HealthCheckRequest): Promise<HealthCheckResponse>;
    /** Get function for health check watch */
    healthWatch(request: HealthCheckRequest): Observable<HealthCheckResponse>;
}
export declare class HealthGrpcServiceClientImpl implements HealthGrpcService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    healthCheck(request: HealthCheckRequest): Promise<HealthCheckResponse>;
    healthWatch(request: HealthCheckRequest): Observable<HealthCheckResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
