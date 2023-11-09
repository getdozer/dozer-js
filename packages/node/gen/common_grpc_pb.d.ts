// package: dozer.common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as common_pb from "./common_pb";
import * as types_pb from "./types_pb";

interface ICommonGrpcServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    count: ICommonGrpcServiceService_Icount;
    query: ICommonGrpcServiceService_Iquery;
    onEvent: ICommonGrpcServiceService_IOnEvent;
    getEndpoints: ICommonGrpcServiceService_IgetEndpoints;
    getFields: ICommonGrpcServiceService_IgetFields;
}

interface ICommonGrpcServiceService_Icount extends grpc.MethodDefinition<common_pb.QueryRequest, common_pb.CountResponse> {
    path: "/dozer.common.CommonGrpcService/count";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<common_pb.QueryRequest>;
    responseSerialize: grpc.serialize<common_pb.CountResponse>;
    responseDeserialize: grpc.deserialize<common_pb.CountResponse>;
}
interface ICommonGrpcServiceService_Iquery extends grpc.MethodDefinition<common_pb.QueryRequest, common_pb.QueryResponse> {
    path: "/dozer.common.CommonGrpcService/query";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<common_pb.QueryRequest>;
    responseSerialize: grpc.serialize<common_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<common_pb.QueryResponse>;
}
interface ICommonGrpcServiceService_IOnEvent extends grpc.MethodDefinition<common_pb.OnEventRequest, types_pb.Operation> {
    path: "/dozer.common.CommonGrpcService/OnEvent";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<common_pb.OnEventRequest>;
    requestDeserialize: grpc.deserialize<common_pb.OnEventRequest>;
    responseSerialize: grpc.serialize<types_pb.Operation>;
    responseDeserialize: grpc.deserialize<types_pb.Operation>;
}
interface ICommonGrpcServiceService_IgetEndpoints extends grpc.MethodDefinition<common_pb.GetEndpointsRequest, common_pb.GetEndpointsResponse> {
    path: "/dozer.common.CommonGrpcService/getEndpoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GetEndpointsRequest>;
    requestDeserialize: grpc.deserialize<common_pb.GetEndpointsRequest>;
    responseSerialize: grpc.serialize<common_pb.GetEndpointsResponse>;
    responseDeserialize: grpc.deserialize<common_pb.GetEndpointsResponse>;
}
interface ICommonGrpcServiceService_IgetFields extends grpc.MethodDefinition<common_pb.GetFieldsRequest, common_pb.GetFieldsResponse> {
    path: "/dozer.common.CommonGrpcService/getFields";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GetFieldsRequest>;
    requestDeserialize: grpc.deserialize<common_pb.GetFieldsRequest>;
    responseSerialize: grpc.serialize<common_pb.GetFieldsResponse>;
    responseDeserialize: grpc.deserialize<common_pb.GetFieldsResponse>;
}

export const CommonGrpcServiceService: ICommonGrpcServiceService;

export interface ICommonGrpcServiceServer extends grpc.UntypedServiceImplementation {
    count: grpc.handleUnaryCall<common_pb.QueryRequest, common_pb.CountResponse>;
    query: grpc.handleUnaryCall<common_pb.QueryRequest, common_pb.QueryResponse>;
    onEvent: grpc.handleServerStreamingCall<common_pb.OnEventRequest, types_pb.Operation>;
    getEndpoints: grpc.handleUnaryCall<common_pb.GetEndpointsRequest, common_pb.GetEndpointsResponse>;
    getFields: grpc.handleUnaryCall<common_pb.GetFieldsRequest, common_pb.GetFieldsResponse>;
}

export interface ICommonGrpcServiceClient {
    count(request: common_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    count(request: common_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    count(request: common_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    query(request: common_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: common_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: common_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    onEvent(request: common_pb.OnEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<types_pb.Operation>;
    onEvent(request: common_pb.OnEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<types_pb.Operation>;
    getEndpoints(request: common_pb.GetEndpointsRequest, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    getFields(request: common_pb.GetFieldsRequest, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
    getFields(request: common_pb.GetFieldsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
    getFields(request: common_pb.GetFieldsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
}

export class CommonGrpcServiceClient extends grpc.Client implements ICommonGrpcServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public count(request: common_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    public count(request: common_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    public count(request: common_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.CountResponse) => void): grpc.ClientUnaryCall;
    public query(request: common_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: common_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: common_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public onEvent(request: common_pb.OnEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<types_pb.Operation>;
    public onEvent(request: common_pb.OnEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<types_pb.Operation>;
    public getEndpoints(request: common_pb.GetEndpointsRequest, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    public getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    public getEndpoints(request: common_pb.GetEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GetEndpointsResponse) => void): grpc.ClientUnaryCall;
    public getFields(request: common_pb.GetFieldsRequest, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
    public getFields(request: common_pb.GetFieldsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
    public getFields(request: common_pb.GetFieldsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GetFieldsResponse) => void): grpc.ClientUnaryCall;
}
