/**
 * @fileoverview gRPC-Web generated client stub for dozer.health
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as health_pb from './health_pb';
export declare class HealthGrpcServiceClient {
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
    methodDescriptorhealthCheck: grpcWeb.MethodDescriptor<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
    healthCheck(request: health_pb.HealthCheckRequest, metadata: grpcWeb.Metadata | null): Promise<health_pb.HealthCheckResponse>;
    healthCheck(request: health_pb.HealthCheckRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: health_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<health_pb.HealthCheckResponse>;
    methodDescriptorhealthWatch: grpcWeb.MethodDescriptor<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
    healthWatch(request: health_pb.HealthCheckRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<health_pb.HealthCheckResponse>;
}
