/**
 * @fileoverview gRPC-Web generated client stub for dozer.health
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as protos_health_pb from '../protos/health_pb';
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
    methodDescriptorhealthCheck: grpcWeb.MethodDescriptor<protos_health_pb.HealthCheckRequest, protos_health_pb.HealthCheckResponse>;
    healthCheck(request: protos_health_pb.HealthCheckRequest, metadata: grpcWeb.Metadata | null): Promise<protos_health_pb.HealthCheckResponse>;
    healthCheck(request: protos_health_pb.HealthCheckRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_health_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<protos_health_pb.HealthCheckResponse>;
    methodDescriptorhealthWatch: grpcWeb.MethodDescriptor<protos_health_pb.HealthCheckRequest, protos_health_pb.HealthCheckResponse>;
    healthWatch(request: protos_health_pb.HealthCheckRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<protos_health_pb.HealthCheckResponse>;
}
