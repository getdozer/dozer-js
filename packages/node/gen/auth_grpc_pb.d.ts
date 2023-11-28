// package: dozer.auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";

interface IAuthGrpcServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAuthToken: IAuthGrpcServiceService_IgetAuthToken;
}

interface IAuthGrpcServiceService_IgetAuthToken extends grpc.MethodDefinition<auth_pb.GetAuthTokenRequest, auth_pb.GetAuthTokenResponse> {
    path: "/dozer.auth.AuthGrpcService/getAuthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.GetAuthTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.GetAuthTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.GetAuthTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.GetAuthTokenResponse>;
}

export const AuthGrpcServiceService: IAuthGrpcServiceService;

export interface IAuthGrpcServiceServer extends grpc.UntypedServiceImplementation {
    getAuthToken: grpc.handleUnaryCall<auth_pb.GetAuthTokenRequest, auth_pb.GetAuthTokenResponse>;
}

export interface IAuthGrpcServiceClient {
    getAuthToken(request: auth_pb.GetAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthGrpcServiceClient extends grpc.Client implements IAuthGrpcServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAuthToken(request: auth_pb.GetAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getAuthToken(request: auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
}
