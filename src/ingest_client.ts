import {IngestServiceClient} from "../generated/protos/IngestServiceClientPb";
import {IngestArrowRequest, IngestRequest} from "../generated/protos/ingest_pb";

export class DozerIngestClient {
    private readonly endpoint: string;
    private service: IngestServiceClient;

    constructor(endpoint: string, server: string = 'localhost:8085') {
        this.endpoint = endpoint;
        this.service = new IngestServiceClient(server);
    }

    async ingest_raw(request: IngestRequest) {
        return await this.service.ingest(request, null);
    }

    async ingest_arrow(request: IngestArrowRequest) {
        return await this.service.ingest_arrow(request, null);
    }
}