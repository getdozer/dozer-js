import { IngestArrowRequest, IngestRequest } from "./generated/protos/ingest_pb";
export declare class DozerIngestClient {
    private readonly endpoint;
    private service;
    constructor(endpoint: string, server?: string);
    ingest_raw(request: IngestRequest): Promise<import("./generated/protos/ingest_pb").IngestResponse>;
    ingest_arrow(request: IngestArrowRequest): Promise<import("./generated/protos/ingest_pb").IngestResponse>;
}
