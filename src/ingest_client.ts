import {createChannel, createClient} from "nice-grpc";
import {
    IngestArrowRequest,
    IngestRequest,
    IngestServiceClient,
    IngestServiceDefinition
} from "../generated/protos/ingest";


export class DozerIngestClient {
    private readonly endpoint: string;
    private client: IngestServiceClient;

    constructor(endpoint: string, server: string = 'localhost:8085') {
        this.endpoint = endpoint;

        const channel = createChannel(server);
        this.client = createClient(IngestServiceDefinition, channel);
    }

    async ingest_raw(request: IngestRequest) {
        return await this.client.ingest(request);
    }

    async ingest_arrow(request: IngestArrowRequest) {
        return await this.client.ingest_arrow(request);
    }

    async ingest_arrow_stream(request: AsyncIterable<IngestArrowRequest>) {
        return await this.client.ingest_arrow_stream(request);
    }
}