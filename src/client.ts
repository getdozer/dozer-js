import {CommonGrpcServiceClient} from "../generated/protos/CommonServiceClientPb";
import {GetFieldsRequest, OnEventRequest, QueryRequest} from "../generated/protos/common_pb";
import {EventType} from "../generated/protos/types_pb";


export class DozerClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;

    constructor(endpoint: string, server_address: string = 'http://localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonGrpcServiceClient(server_address);
    }

    async count() {
        return await this.service.count(new QueryRequest().setEndpoint(this.endpoint), null);
    }

    async query() {
        return await this.service.query(new QueryRequest().setEndpoint(this.endpoint), null);
    }

    onEvent(eventType = EventType.ALL) {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint).setType(eventType), null);
    }

    async getFields() {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), null);
    }
}