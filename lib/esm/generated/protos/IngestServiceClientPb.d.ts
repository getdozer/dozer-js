/**
 * @fileoverview gRPC-Web generated client stub for dozer.ingest
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as protos_ingest_pb from '../protos/ingest_pb';
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
    methodDescriptoringest: grpcWeb.MethodDescriptor<protos_ingest_pb.IngestRequest, protos_ingest_pb.IngestResponse>;
    ingest(request: protos_ingest_pb.IngestRequest, metadata: grpcWeb.Metadata | null): Promise<protos_ingest_pb.IngestResponse>;
    ingest(request: protos_ingest_pb.IngestRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<protos_ingest_pb.IngestResponse>;
    methodDescriptoringest_arrow: grpcWeb.MethodDescriptor<protos_ingest_pb.IngestArrowRequest, protos_ingest_pb.IngestResponse>;
    ingest_arrow(request: protos_ingest_pb.IngestArrowRequest, metadata: grpcWeb.Metadata | null): Promise<protos_ingest_pb.IngestResponse>;
    ingest_arrow(request: protos_ingest_pb.IngestArrowRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: protos_ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<protos_ingest_pb.IngestResponse>;
}
