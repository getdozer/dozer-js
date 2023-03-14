import {CommonGrpcServiceClient} from "./generated/protos/CommonServiceClientPb";
import {EventType} from "./generated/protos/types_pb";
import {RecordMapper} from "./helper";
import {GetFieldsRequest, OnEventRequest, QueryRequest} from "./generated/protos/common_pb";
import {DozerQuery, QueryHelper} from "./query_helper";

export class ApiClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;

    constructor(endpoint: string, server_address: string = 'http://localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonGrpcServiceClient(server_address);
    }

    async count(query: DozerQuery | null = null) {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }
        return this.service.count(request, null);
    }

    async query(query: DozerQuery | null = null) {
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

    onEvent(eventType = EventType.ALL) {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint).setType(eventType), undefined);
    }

    async getFields() {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), null);
    }
}