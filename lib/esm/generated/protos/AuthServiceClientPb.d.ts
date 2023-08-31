/**
 * @fileoverview gRPC-Web generated client stub for dozer.auth
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as auth_pb from './auth_pb';
export declare class AuthGrpcServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorgetAuthToken: grpcWeb.MethodDescriptor<auth_pb.GetAuthTokenRequest, auth_pb.GetAuthTokenResponse>;
    getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpcWeb.Metadata | null): Promise<auth_pb.GetAuthTokenResponse>;
    getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: auth_pb.GetAuthTokenResponse) => void): grpcWeb.ClientReadableStream<auth_pb.GetAuthTokenResponse>;
}
