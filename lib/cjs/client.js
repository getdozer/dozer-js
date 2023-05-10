"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const CommonServiceClientPb_1 = require("./generated/protos/CommonServiceClientPb");
const types_pb_1 = require("./generated/protos/types_pb");
const helper_1 = require("./helper");
const common_pb_1 = require("./generated/protos/common_pb");
const query_helper_1 = require("./query_helper");
const HealthServiceClientPb_1 = require("./generated/protos/HealthServiceClientPb");
const health_pb_1 = require("./generated/protos/health_pb");
const defaultApiClientOptions = {
    serverAddress: 'http://localhost:50051',
    authToken: null
};
class ApiClient {
    constructor(endpoint, clientOptions) {
        const options = Object.assign(Object.assign({}, defaultApiClientOptions), clientOptions);
        this.endpoint = endpoint;
        this.authMetadata = (options.authToken ? { Authorization: 'Bearer ' + options.authToken } : {});
        this.service = new CommonServiceClientPb_1.CommonGrpcServiceClient(options.serverAddress, this.authMetadata);
        this.healthService = new HealthServiceClientPb_1.HealthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }
    healthCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.healthService.healthCheck(new health_pb_1.HealthCheckRequest(), this.authMetadata);
        });
    }
    count(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
            }
            return this.service.count(request, this.authMetadata);
        });
    }
    query(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
            }
            return yield this.service.query(request, this.authMetadata).then((response) => {
                let mapper = new helper_1.RecordMapper(response.getFieldsList());
                return [
                    response.getFieldsList(),
                    response.getRecordsList().map(v => { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); })
                ];
            });
        });
    }
    onEvent(eventType = types_pb_1.EventType.ALL) {
        return this.service.onEvent(new common_pb_1.OnEventRequest().setEndpoint(this.endpoint).setType(eventType), this.authMetadata);
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata);
        });
    }
}
exports.ApiClient = ApiClient;
