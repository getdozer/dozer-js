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
exports.DozerEndpoint = exports.DozerClient = exports.ApiClient = void 0;
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
/**
 * @deprecated
 * use DozerClient instead
 *
 * @example
 * ```typescript
 * const client = new DozerClient();
 * const endpoint = client.getEndpoint('flights');
 * const [fields, records] = await endpoint.query();
 * const count = await endpoint.count();
 * const stream = endpoint.onEvent((evt: DozerEndpointEvent) => {
 *   console.log(evt.data);
 *   console.log(evt.fields);
 *   console.log(evt.primaryIndexKeys);
 *   console.log(evt.operation);
 *   console.log(evt.mapper);
 * });
 * ```
 */
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
    onEvent(eventType = types_pb_1.EventType.ALL, filter = null) {
        const onEventRequest = new common_pb_1.OnEventRequest()
            .setEndpoint(this.endpoint)
            .setType(eventType);
        if (filter) {
            onEventRequest.setFilter(query_helper_1.QueryHelper.convertFilter(filter));
        }
        return this.service.onEvent(onEventRequest, this.authMetadata);
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata);
        });
    }
}
exports.ApiClient = ApiClient;
const defaultDozerClientOptions = {
    serverAddress: "http://localhost:50051",
    authToken: null,
};
class DozerClient {
    constructor(options) {
        this.authMetadata = {};
        this.options = Object.assign(Object.assign({}, defaultDozerClientOptions), options);
        if (this.options.authToken) {
            this.authMetadata.Authorization = "Bearer " + this.options.authToken;
        }
        this.service = new CommonServiceClientPb_1.CommonGrpcServiceClient(this.options.serverAddress, this.authMetadata);
        this.healthService = new HealthServiceClientPb_1.HealthGrpcServiceClient(this.options.serverAddress, this.authMetadata);
    }
    healthCheck() {
        return this.healthService.healthCheck(new health_pb_1.HealthCheckRequest(), this.authMetadata);
    }
    waitForHealthCheck(retry = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.healthCheck();
            if (response.getStatus() === health_pb_1.HealthCheckResponse.ServingStatus.SERVING) {
                return Promise.resolve();
            }
            if (retry > 0) {
                return this.waitForHealthCheck(retry - 1);
            }
            return Promise.reject(response.getStatus());
        });
    }
    getEndpoints() {
        return this.service.getEndpoints(new common_pb_1.GetEndpointsRequest(), this.authMetadata);
    }
    getEndpoint(endpoint) {
        return new DozerEndpoint(endpoint, this);
    }
}
exports.DozerClient = DozerClient;
class DozerEndpoint {
    constructor(endpoint, client) {
        this.endpoint = endpoint;
        this.client = client;
    }
    count(query) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.waitForHealthCheck();
            const request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
            if (query) {
                request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
            }
            return this.client.service.count(request, this.client.authMetadata);
        });
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.waitForHealthCheck();
            const request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
            if (query) {
                request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
            }
            return this.client.service.query(request, this.client.authMetadata).then((response) => {
                const mapper = new helper_1.RecordMapper(response.getFieldsList());
                return [
                    response.getFieldsList(),
                    response.getRecordsList().map(v => { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); }),
                ];
            });
        });
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.waitForHealthCheck();
            return this.client.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), this.client.authMetadata);
        });
    }
    onEvent(callback, eventType = types_pb_1.EventType.ALL, filter) {
        let stream = null;
        this.getFields().then((fieldsResponse) => {
            const fields = fieldsResponse.getFieldsList();
            const mapper = new helper_1.RecordMapper(fields);
            const primaryIndexKeys = fieldsResponse.getPrimaryIndexList().map(index => fields[index].getName());
            const onEventRequest = new common_pb_1.OnEventRequest()
                .setEndpoint(this.endpoint)
                .setType(eventType);
            if (filter) {
                onEventRequest.setFilter(query_helper_1.QueryHelper.convertFilter(filter));
            }
            stream = this.client.service.onEvent(onEventRequest, this.client.authMetadata);
            stream.on('data', (operation) => {
                var _a;
                const oldValue = operation.getOld();
                const newValue = operation.getNew();
                const data = {
                    typ: operation.getTyp(),
                    old: oldValue ? mapper.mapRecord(oldValue.getValuesList()) : undefined,
                    new: newValue ? mapper.mapRecord(newValue.getValuesList()) : undefined,
                    newId: (_a = operation.getNewId()) !== null && _a !== void 0 ? _a : undefined,
                    endpointName: operation.getEndpointName(),
                };
                callback({ data, fields, primaryIndexKeys, operation, mapper });
            });
            stream.on('error', (err) => {
                console.error(err);
                stream === null || stream === void 0 ? void 0 : stream.cancel();
            });
        });
        return stream;
    }
}
exports.DozerEndpoint = DozerEndpoint;
