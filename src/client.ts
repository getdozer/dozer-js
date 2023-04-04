import {CommonGrpcServiceClient} from "./generated/protos/CommonServiceClientPb";
import {EventType, FieldDefinition, Operation} from "./generated/protos/types_pb";
import {RecordMapper} from "./helper";
import {
    CountResponse,
    GetFieldsRequest,
    GetFieldsResponse,
    OnEventRequest,
    QueryRequest
} from "./generated/protos/common_pb";
import {DozerQuery, QueryHelper} from "./query_helper";
import {HealthGrpcServiceClient} from "./generated/protos/HealthServiceClientPb";
import {HealthCheckRequest, HealthCheckResponse} from "./generated/protos/health_pb";
import {ClientReadableStream, Metadata} from "grpc-web";

export interface ApiClientOptions {
    serverAddress?: string,
    authToken?: string | null
}

const defaultApiClientOptions = {
    serverAddress: 'http://localhost:50051',
    authToken: null
}

export class ApiClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;
    private healthService: HealthGrpcServiceClient;
    private readonly authMetadata: Metadata;

    constructor(endpoint: string, clientOptions?: ApiClientOptions) {
        const options = {...defaultApiClientOptions, ...clientOptions};
        this.endpoint = endpoint;
        this.authMetadata = (options.authToken ? {Authorization: 'Bearer ' + options.authToken} : {}) as Metadata;
        this.service = new CommonGrpcServiceClient(options.serverAddress, this.authMetadata);
        this.healthService = new HealthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }

    async healthCheck(): Promise<HealthCheckResponse> {
        return this.healthService.healthCheck(new HealthCheckRequest(), this.authMetadata);
    }

    async count(query: DozerQuery | null = null): Promise<CountResponse> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }
        return this.service.count(request, this.authMetadata);
    }

    async query(query: DozerQuery | null = null): Promise<[FieldDefinition[], Object[]]> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }

        return await this.service.query(request, this.authMetadata).then((response) => {
            let mapper = new RecordMapper(response.getFieldsList());

            return [
                response.getFieldsList(),
                response.getRecordsList().map(v => mapper.mapRecord(v.getRecord()?.getValuesList() ?? []))
            ];
        });
    }

    onEvent(eventType = EventType.ALL): ClientReadableStream<Operation> {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint).setType(eventType), this.authMetadata);
    }

    async getFields(): Promise<GetFieldsResponse> {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata);
    }
}