import {CommonGrpcServiceClient} from "../generated/protos/CommonServiceClientPb";
import {GetFieldsRequest, OnEventRequest, QueryRequest} from "../generated/protos/common_pb";


export class DozerClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;

    constructor(endpoint: string, server_address: string = 'localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonGrpcServiceClient('http://localhost:50051');
    }

    async count() {
        return await this.service.count(new QueryRequest().setEndpoint(this.endpoint), null);
    }

    async query() {
        return await this.service.query(new QueryRequest().setEndpoint(this.endpoint), null);
    }

    async onEvent() {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint), null);
    }

    async getFields() {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), null);
    }
}