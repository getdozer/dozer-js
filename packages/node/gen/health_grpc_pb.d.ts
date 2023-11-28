// package: dozer.health
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as health_pb from "./health_pb";

interface IHealthGrpcServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    healthCheck: IHealthGrpcServiceService_IhealthCheck;
    healthWatch: IHealthGrpcServiceService_IhealthWatch;
}

interface IHealthGrpcServiceService_IhealthCheck extends grpc.MethodDefinition<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse> {
    path: "/dozer.health.HealthGrpcService/healthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<health_pb.HealthCheckResponse>;
}
interface IHealthGrpcServiceService_IhealthWatch extends grpc.MethodDefinition<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse> {
    path: "/dozer.health.HealthGrpcService/healthWatch";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<health_pb.HealthCheckResponse>;
}

export const HealthGrpcServiceService: IHealthGrpcServiceService;

export interface IHealthGrpcServiceServer extends grpc.UntypedServiceImplementation {
    healthCheck: grpc.handleUnaryCall<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
    healthWatch: grpc.handleServerStreamingCall<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
}

export interface IHealthGrpcServiceClient {
    healthCheck(request: health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    healthCheck(request: health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    healthCheck(request: health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    healthWatch(request: health_pb.HealthCheckRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
    healthWatch(request: health_pb.HealthCheckRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
}

export class HealthGrpcServiceClient extends grpc.Client implements IHealthGrpcServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public healthCheck(request: health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public healthCheck(request: health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public healthCheck(request: health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public healthWatch(request: health_pb.HealthCheckRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
    public healthWatch(request: health_pb.HealthCheckRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
}
