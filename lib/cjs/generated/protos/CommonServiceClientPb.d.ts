/**
 * @fileoverview gRPC-Web generated client stub for dozer.common
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as common_pb from './common_pb';
import * as types_pb from './types_pb';
export declare class CommonGrpcServiceClient {
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
    methodDescriptorcount: grpcWeb.MethodDescriptor<common_pb.QueryRequest, common_pb.CountResponse>;
    count(request: common_pb.QueryRequest, metadata: grpcWeb.Metadata | null): Promise<common_pb.CountResponse>;
    count(request: common_pb.QueryRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: common_pb.CountResponse) => void): grpcWeb.ClientReadableStream<common_pb.CountResponse>;
    methodDescriptorquery: grpcWeb.MethodDescriptor<common_pb.QueryRequest, common_pb.QueryResponse>;
    query(request: common_pb.QueryRequest, metadata: grpcWeb.Metadata | null): Promise<common_pb.QueryResponse>;
    query(request: common_pb.QueryRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: common_pb.QueryResponse) => void): grpcWeb.ClientReadableStream<common_pb.QueryResponse>;
    methodDescriptorOnEvent: grpcWeb.MethodDescriptor<common_pb.OnEventRequest, types_pb.Operation>;
    onEvent(request: common_pb.OnEventRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<types_pb.Operation>;
    methodDescriptorgetEndpoints: grpcWeb.MethodDescriptor<common_pb.GetEndpointsRequest, common_pb.GetEndpointsResponse>;
    getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpcWeb.Metadata | null): Promise<common_pb.GetEndpointsResponse>;
    getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: common_pb.GetEndpointsResponse) => void): grpcWeb.ClientReadableStream<common_pb.GetEndpointsResponse>;
    methodDescriptorgetFields: grpcWeb.MethodDescriptor<common_pb.GetFieldsRequest, common_pb.GetFieldsResponse>;
    getFields(request: common_pb.GetFieldsRequest, metadata: grpcWeb.Metadata | null): Promise<common_pb.GetFieldsResponse>;
    getFields(request: common_pb.GetFieldsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: common_pb.GetFieldsResponse) => void): grpcWeb.ClientReadableStream<common_pb.GetFieldsResponse>;
}
