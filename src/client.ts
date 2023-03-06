import {CommonGrpcServiceClient, CommonGrpcServiceDefinition, QueryRequest} from "../generated/protos/common";
import {createChannel, createClient} from "nice-grpc";


export class DozerClient {
    private readonly endpoint: string;
    private client: CommonGrpcServiceClient;

    constructor(endpoint: string) {
        this.endpoint = endpoint;

        const channel = createChannel('localhost:50051');
        this.client = createClient(CommonGrpcServiceDefinition, channel);
    }

    async count() {
        let request = QueryRequest.fromPartial({endpoint: this.endpoint});

        return await this.client.count(request);
    }

    async query() {
        let request = QueryRequest.fromPartial({endpoint: this.endpoint});

        return await this.client.query(request);
    }
}