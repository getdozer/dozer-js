/**
 * @fileoverview gRPC-Web generated client stub for dozer.ingest
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as ingest_pb from './ingest_pb';
export declare class IngestServiceClient {
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
    methodDescriptoringest: grpcWeb.MethodDescriptor<ingest_pb.IngestRequest, ingest_pb.IngestResponse>;
    ingest(request: ingest_pb.IngestRequest, metadata: grpcWeb.Metadata | null): Promise<ingest_pb.IngestResponse>;
    ingest(request: ingest_pb.IngestRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<ingest_pb.IngestResponse>;
    methodDescriptoringest_arrow: grpcWeb.MethodDescriptor<ingest_pb.IngestArrowRequest, ingest_pb.IngestResponse>;
    ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpcWeb.Metadata | null): Promise<ingest_pb.IngestResponse>;
    ingest_arrow(request: ingest_pb.IngestArrowRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<ingest_pb.IngestResponse>;
}
