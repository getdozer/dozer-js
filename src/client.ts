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
import {ClientReadableStream} from "grpc-web";

export class ApiClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;
    private healthService: HealthGrpcServiceClient;

    constructor(endpoint: string, server_address: string = 'http://localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonGrpcServiceClient(server_address);
        this.healthService = new HealthGrpcServiceClient(server_address);
    }

    async healthCheck(): Promise<HealthCheckResponse> {
        return this.healthService.healthCheck(new HealthCheckRequest(), null);
    }

    async count(query: DozerQuery | null = null): Promise<CountResponse> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }
        return this.service.count(request, null);
    }

    async query(query: DozerQuery | null = null): Promise<[FieldDefinition[], Object[]]> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }

        return await this.service.query(request, null).then((response) => {
            let mapper = new RecordMapper(response.getFieldsList());

            return [
                response.getFieldsList(),
                response.getRecordsList().map(v => mapper.mapRecord(v.getRecord()?.getValuesList() ?? []))
            ];
        });
    }

    onEvent(eventType = EventType.ALL): ClientReadableStream<Operation> {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint).setType(eventType), undefined);
    }

    async getFields(): Promise<GetFieldsResponse> {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), null);
    }
}