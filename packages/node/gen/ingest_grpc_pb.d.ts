// package: dozer.ingest
// file: ingest.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ingest_pb from "./ingest_pb";
import * as types_pb from "./types_pb";

interface IIngestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ingest: IIngestServiceService_Iingest;
    ingest_stream: IIngestServiceService_Iingest_stream;
    ingest_arrow: IIngestServiceService_Iingest_arrow;
    ingest_arrow_stream: IIngestServiceService_Iingest_arrow_stream;
}

interface IIngestServiceService_Iingest extends grpc.MethodDefinition<ingest_pb.IngestRequest, ingest_pb.IngestResponse> {
    path: "/dozer.ingest.IngestService/ingest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ingest_pb.IngestRequest>;
    requestDeserialize: grpc.deserialize<ingest_pb.IngestRequest>;
    responseSerialize: grpc.serialize<ingest_pb.IngestResponse>;
    responseDeserialize: grpc.deserialize<ingest_pb.IngestResponse>;
}
interface IIngestServiceService_Iingest_stream extends grpc.MethodDefinition<ingest_pb.IngestRequest, ingest_pb.IngestResponse> {
    path: "/dozer.ingest.IngestService/ingest_stream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ingest_pb.IngestRequest>;
    requestDeserialize: grpc.deserialize<ingest_pb.IngestRequest>;
    responseSerialize: grpc.serialize<ingest_pb.IngestResponse>;
    responseDeserialize: grpc.deserialize<ingest_pb.IngestResponse>;
}
interface IIngestServiceService_Iingest_arrow extends grpc.MethodDefinition<ingest_pb.IngestArrowRequest, ingest_pb.IngestResponse> {
    path: "/dozer.ingest.IngestService/ingest_arrow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ingest_pb.IngestArrowRequest>;
    requestDeserialize: grpc.deserialize<ingest_pb.IngestArrowRequest>;
    responseSerialize: grpc.serialize<ingest_pb.IngestResponse>;
    responseDeserialize: grpc.deserialize<ingest_pb.IngestResponse>;
}
interface IIngestServiceService_Iingest_arrow_stream extends grpc.MethodDefinition<ingest_pb.IngestArrowRequest, ingest_pb.IngestResponse> {
    path: "/dozer.ingest.IngestService/ingest_arrow_stream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ingest_pb.IngestArrowRequest>;
    requestDeserialize: grpc.deserialize<ingest_pb.IngestArrowRequest>;
    responseSerialize: grpc.serialize<ingest_pb.IngestResponse>;
    responseDeserialize: grpc.deserialize<ingest_pb.IngestResponse>;
}

export const IngestServiceService: IIngestServiceService;

export interface IIngestServiceServer extends grpc.UntypedServiceImplementation {
    ingest: grpc.handleUnaryCall<ingest_pb.IngestRequest, ingest_pb.IngestResponse>;
    ingest_stream: grpc.handleClientStreamingCall<ingest_pb.IngestRequest, ingest_pb.IngestResponse>;
    ingest_arrow: grpc.handleUnaryCall<ingest_pb.IngestArrowRequest, ingest_pb.IngestResponse>;
    ingest_arrow_stream: grpc.handleClientStreamingCall<ingest_pb.IngestArrowRequest, ingest_pb.IngestResponse>;
}

export interface IIngestServiceClient {
    ingest(request: ingest_pb.IngestRequest, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest(request: ingest_pb.IngestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest(request: ingest_pb.IngestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest_stream(callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    ingest_stream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    ingest_stream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    ingest_stream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    ingest_arrow(request: ingest_pb.IngestArrowRequest, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest_arrow_stream(callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    ingest_arrow_stream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    ingest_arrow_stream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    ingest_arrow_stream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
}

export class IngestServiceClient extends grpc.Client implements IIngestServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ingest(request: ingest_pb.IngestRequest, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest(request: ingest_pb.IngestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest(request: ingest_pb.IngestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest_stream(callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    public ingest_stream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    public ingest_stream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    public ingest_stream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestRequest>;
    public ingest_arrow(request: ingest_pb.IngestArrowRequest, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest_arrow_stream(callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    public ingest_arrow_stream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    public ingest_arrow_stream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
    public ingest_arrow_stream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_pb.IngestResponse) => void): grpc.ClientWritableStream<ingest_pb.IngestArrowRequest>;
}
