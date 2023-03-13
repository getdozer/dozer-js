/**
 * @fileoverview gRPC-Web generated client stub for dozer.common
 * @enhanceable
 * @public
 */
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/common.proto
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as protos_common_pb from '../protos/common_pb';
import * as protos_types_pb from '../protos/types_pb';
export class CommonGrpcServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorcount = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/count', grpcWeb.MethodType.UNARY, protos_common_pb.QueryRequest, protos_common_pb.CountResponse, (request) => {
            return request.serializeBinary();
        }, protos_common_pb.CountResponse.deserializeBinary);
        this.methodDescriptorquery = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/query', grpcWeb.MethodType.UNARY, protos_common_pb.QueryRequest, protos_common_pb.QueryResponse, (request) => {
            return request.serializeBinary();
        }, protos_common_pb.QueryResponse.deserializeBinary);
        this.methodDescriptorOnEvent = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/OnEvent', grpcWeb.MethodType.SERVER_STREAMING, protos_common_pb.OnEventRequest, protos_types_pb.Operation, (request) => {
            return request.serializeBinary();
        }, protos_types_pb.Operation.deserializeBinary);
        this.methodDescriptorgetEndpoints = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/getEndpoints', grpcWeb.MethodType.UNARY, protos_common_pb.GetEndpointsRequest, protos_common_pb.GetEndpointsResponse, (request) => {
            return request.serializeBinary();
        }, protos_common_pb.GetEndpointsResponse.deserializeBinary);
        this.methodDescriptorgetFields = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/getFields', grpcWeb.MethodType.UNARY, protos_common_pb.GetFieldsRequest, protos_common_pb.GetFieldsResponse, (request) => {
            return request.serializeBinary();
        }, protos_common_pb.GetFieldsResponse.deserializeBinary);
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
    count(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/count', request, metadata || {}, this.methodDescriptorcount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/count', request, metadata || {}, this.methodDescriptorcount);
    }
    query(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/query', request, metadata || {}, this.methodDescriptorquery, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/query', request, metadata || {}, this.methodDescriptorquery);
    }
    onEvent(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/dozer.common.CommonGrpcService/OnEvent', request, metadata || {}, this.methodDescriptorOnEvent);
    }
    getEndpoints(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/getEndpoints', request, metadata || {}, this.methodDescriptorgetEndpoints, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/getEndpoints', request, metadata || {}, this.methodDescriptorgetEndpoints);
    }
    getFields(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/getFields', request, metadata || {}, this.methodDescriptorgetFields, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/getFields', request, metadata || {}, this.methodDescriptorgetFields);
    }
}