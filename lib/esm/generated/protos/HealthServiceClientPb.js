/**
 * @fileoverview gRPC-Web generated client stub for dozer.health
 * @enhanceable
 * @public
 */
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/health.proto
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as protos_health_pb from '../protos/health_pb';
export class HealthGrpcServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorhealthCheck = new grpcWeb.MethodDescriptor('/dozer.health.HealthGrpcService/healthCheck', grpcWeb.MethodType.UNARY, protos_health_pb.HealthCheckRequest, protos_health_pb.HealthCheckResponse, (request) => {
            return request.serializeBinary();
        }, protos_health_pb.HealthCheckResponse.deserializeBinary);
        this.methodDescriptorhealthWatch = new grpcWeb.MethodDescriptor('/dozer.health.HealthGrpcService/healthWatch', grpcWeb.MethodType.SERVER_STREAMING, protos_health_pb.HealthCheckRequest, protos_health_pb.HealthCheckResponse, (request) => {
            return request.serializeBinary();
        }, protos_health_pb.HealthCheckResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname.replace(/\/+$/, '');
        this.credentials_ = credentials;
        this.options_ = options;
    }
    healthCheck(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.health.HealthGrpcService/healthCheck', request, metadata || {}, this.methodDescriptorhealthCheck, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.health.HealthGrpcService/healthCheck', request, metadata || {}, this.methodDescriptorhealthCheck);
    }
    healthWatch(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/dozer.health.HealthGrpcService/healthWatch', request, metadata || {}, this.methodDescriptorhealthWatch);
    }
}