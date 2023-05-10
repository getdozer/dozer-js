/**
 * @fileoverview gRPC-Web generated client stub for dozer.auth
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as protos_auth_pb from '../protos/auth_pb';
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
    methodDescriptorgetAuthToken: grpcWeb.MethodDescriptor<protos_auth_pb.GetAuthTokenRequest, protos_auth_pb.GetAuthTokenResponse>;
    getAuthToken(request: protos_auth_pb.GetAuthTokenRequest, metadata: grpcWeb.Metadata | null): Promise<protos_auth_pb.GetAuthTokenResponse>;
    getAuthToken(request: protos_auth_pb.GetAuthTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_auth_pb.GetAuthTokenResponse) => void): grpcWeb.ClientReadableStream<protos_auth_pb.GetAuthTokenResponse>;
}
