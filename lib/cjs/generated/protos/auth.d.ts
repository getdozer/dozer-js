import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dozer.auth";
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
export declare const GetAuthTokenRequest: {
    encode(message: GetAuthTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthTokenRequest;
    fromJSON(object: any): GetAuthTokenRequest;
    toJSON(message: GetAuthTokenRequest): unknown;
    create<I extends {
        accessFilter?: string | undefined;
    } & {
        accessFilter?: string | undefined;
    } & { [K in Exclude<keyof I, "accessFilter">]: never; }>(base?: I | undefined): GetAuthTokenRequest;
    fromPartial<I_1 extends {
        accessFilter?: string | undefined;
    } & {
        accessFilter?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "accessFilter">]: never; }>(object: I_1): GetAuthTokenRequest;
};
export declare const GetAuthTokenResponse: {
    encode(message: GetAuthTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthTokenResponse;
    fromJSON(object: any): GetAuthTokenResponse;
    toJSON(message: GetAuthTokenResponse): unknown;
    create<I extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & { [K in Exclude<keyof I, "token">]: never; }>(base?: I | undefined): GetAuthTokenResponse;
    fromPartial<I_1 extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "token">]: never; }>(object: I_1): GetAuthTokenResponse;
};
/** AuthGrpcService allows developers to generate JWT token for restricted access to data. */
export interface AuthGrpcService {
    /** Creates auth token with custom access */
    getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
}
export declare class AuthGrpcServiceClientImpl implements AuthGrpcService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
