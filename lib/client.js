"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const CommonServiceClientPb_1 = require("./generated/protos/CommonServiceClientPb");
const common_pb_1 = require("./generated/protos/common_pb");
const types_pb_1 = require("./generated/protos/types_pb");
const helper_1 = require("./helper");
class ApiClient {
    endpoint;
    service;
    constructor(endpoint, server_address = 'http://localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonServiceClientPb_1.CommonGrpcServiceClient(server_address);
    }
    async count() {
        return this.service.count(new common_pb_1.QueryRequest().setEndpoint(this.endpoint), null);
    }
    async query() {
        return await this.service.query(new common_pb_1.QueryRequest().setEndpoint(this.endpoint), null).then((response) => {
            let mapper = new helper_1.RecordMapper(response.getFieldsList());
            return [
                response.getFieldsList(),
                response.getRecordsList().map(v => mapper.mapRecord(v.getRecord()?.getValuesList() ?? []))
            ];
        });
    }
    onEvent(eventType = types_pb_1.EventType.ALL) {
        return this.service.onEvent(new common_pb_1.OnEventRequest().setEndpoint(this.endpoint).setType(eventType), undefined);
    }
    async getFields() {
        return await this.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), null);
    }
}
exports.ApiClient = ApiClient;
