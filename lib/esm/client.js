var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CommonGrpcServiceClient } from "./generated/protos/CommonServiceClientPb";
import { EventType } from "./generated/protos/types_pb";
import { RecordMapper } from "./helper";
import { GetFieldsRequest, OnEventRequest, QueryRequest } from "./generated/protos/common_pb";
import { QueryHelper } from "./query_helper";
export class ApiClient {
    constructor(endpoint, server_address = 'http://localhost:50051') {
        this.endpoint = endpoint;
        this.service = new CommonGrpcServiceClient(server_address);
    }
    count(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return this.service.count(request, null);
        });
    }
    query(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return yield this.service.query(request, null).then((response) => {
                let mapper = new RecordMapper(response.getFieldsList());
                return [
                    response.getFieldsList(),
                    response.getRecordsList().map(v => { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); })
                ];
            });
        });
    }
    onEvent(eventType = EventType.ALL) {
        return this.service.onEvent(new OnEventRequest().setEndpoint(this.endpoint).setType(eventType), undefined);
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), null);
        });
    }
}
