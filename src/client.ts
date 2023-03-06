import {
    CommonGrpcServiceClient,
    CommonGrpcServiceDefinition, GetFieldsRequest,
    OnEventRequest,
    QueryRequest
} from "../generated/protos/common";
import {createChannel, createClient} from "nice-grpc";


export class DozerClient {
    private readonly endpoint: string;
    private client: CommonGrpcServiceClient;

    constructor(endpoint: string, server_address: string = 'localhost:50051') {
        this.endpoint = endpoint;

        const channel = createChannel(server_address);
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

    async onEvent() {
        let request = OnEventRequest.fromPartial({endpoint: this.endpoint});

        return this.client.onEvent(request);
    }

    async getFields() {
        let request = GetFieldsRequest.fromPartial({endpoint: this.endpoint});

        return await this.client.getFields(request);
    }
}