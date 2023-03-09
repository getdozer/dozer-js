/**
 * @fileoverview gRPC-Web generated client stub for dozer.common
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as protos_common_pb from '../protos/common_pb';
import * as protos_types_pb from '../protos/types_pb';
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
    methodDescriptorcount: grpcWeb.MethodDescriptor<protos_common_pb.QueryRequest, protos_common_pb.CountResponse>;
    count(request: protos_common_pb.QueryRequest, metadata: grpcWeb.Metadata | null): Promise<protos_common_pb.CountResponse>;
    count(request: protos_common_pb.QueryRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_common_pb.CountResponse) => void): grpcWeb.ClientReadableStream<protos_common_pb.CountResponse>;
    methodDescriptorquery: grpcWeb.MethodDescriptor<protos_common_pb.QueryRequest, protos_common_pb.QueryResponse>;
    query(request: protos_common_pb.QueryRequest, metadata: grpcWeb.Metadata | null): Promise<protos_common_pb.QueryResponse>;
    query(request: protos_common_pb.QueryRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_common_pb.QueryResponse) => void): grpcWeb.ClientReadableStream<protos_common_pb.QueryResponse>;
    methodDescriptorOnEvent: grpcWeb.MethodDescriptor<protos_common_pb.OnEventRequest, protos_types_pb.Operation>;
    onEvent(request: protos_common_pb.OnEventRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<protos_types_pb.Operation>;
    methodDescriptorgetEndpoints: grpcWeb.MethodDescriptor<protos_common_pb.GetEndpointsRequest, protos_common_pb.GetEndpointsResponse>;
    getEndpoints(request: protos_common_pb.GetEndpointsRequest, metadata: grpcWeb.Metadata | null): Promise<protos_common_pb.GetEndpointsResponse>;
    getEndpoints(request: protos_common_pb.GetEndpointsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_common_pb.GetEndpointsResponse) => void): grpcWeb.ClientReadableStream<protos_common_pb.GetEndpointsResponse>;
    methodDescriptorgetFields: grpcWeb.MethodDescriptor<protos_common_pb.GetFieldsRequest, protos_common_pb.GetFieldsResponse>;
    getFields(request: protos_common_pb.GetFieldsRequest, metadata: grpcWeb.Metadata | null): Promise<protos_common_pb.GetFieldsResponse>;
    getFields(request: protos_common_pb.GetFieldsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_common_pb.GetFieldsResponse) => void): grpcWeb.ClientReadableStream<protos_common_pb.GetFieldsResponse>;
}
