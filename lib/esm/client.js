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
import { GetEndpointsRequest, GetFieldsRequest, OnEventRequest, QueryRequest } from "./generated/protos/common_pb";
import { QueryHelper } from "./query_helper";
import { HealthGrpcServiceClient } from "./generated/protos/HealthServiceClientPb";
import { HealthCheckRequest, HealthCheckResponse } from "./generated/protos/health_pb";
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
export class ApiClient {
    constructor(endpoint, clientOptions) {
        const options = Object.assign(Object.assign({}, defaultApiClientOptions), clientOptions);
        this.endpoint = endpoint;
        this.authMetadata = (options.authToken ? { Authorization: 'Bearer ' + options.authToken } : {});
        this.service = new CommonGrpcServiceClient(options.serverAddress, this.authMetadata);
        this.healthService = new HealthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }
    healthCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.healthService.healthCheck(new HealthCheckRequest(), this.authMetadata);
        });
    }
    count(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return this.service.count(request, this.authMetadata);
        });
    }
    query(query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new QueryRequest().setEndpoint(this.endpoint);
            if (query !== null) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return yield this.service.query(request, this.authMetadata).then((response) => {
                let mapper = new RecordMapper(response.getFieldsList());
                return [
                    response.getFieldsList(),
                    response.getRecordsList().map(v => { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); })
                ];
            });
        });
    }
    onEvent(eventType = EventType.ALL, filter = null) {
        const onEventRequest = new OnEventRequest()
            .setEndpoint(this.endpoint)
            .setType(eventType);
        if (filter) {
            onEventRequest.setFilter(QueryHelper.convertFilter(filter));
        }
        return this.service.onEvent(onEventRequest, this.authMetadata);
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata);
        });
    }
}
const defaultDozerClientOptions = {
    serverAddress: "http://localhost:50051",
    authToken: null,
};
export class DozerClient {
    constructor(options) {
        this.authMetadata = {};
        this.options = Object.assign(Object.assign({}, defaultDozerClientOptions), options);
        if (this.options.authToken) {
            this.authMetadata.Authorization = "Bearer " + this.options.authToken;
        }
        this.service = new CommonGrpcServiceClient(this.options.serverAddress, this.authMetadata);
        this.healthService = new HealthGrpcServiceClient(this.options.serverAddress, this.authMetadata);
    }
    healthCheck() {
        return this.healthService.healthCheck(new HealthCheckRequest(), this.authMetadata);
    }
    waitForHealthCheck(retry = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.healthCheck();
            if (response.getStatus() === HealthCheckResponse.ServingStatus.SERVING) {
                return Promise.resolve();
            }
            if (retry > 0) {
                return this.waitForHealthCheck(retry - 1);
            }
            return Promise.reject(response.getStatus());
        });
    }
    getEndpoints() {
        return this.service.getEndpoints(new GetEndpointsRequest(), this.authMetadata);
    }
    getEndpoint(endpoint) {
        return new DozerEndpoint(endpoint, this);
    }
}
export class DozerEndpoint {
    constructor(endpoint, client) {
        this.fieldsResponseLoading = false;
        this.fieldsResponseCallback = [];
        this.endpoint = endpoint;
        this.client = client;
    }
    count(query) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.client.waitForHealthCheck();
            const request = new QueryRequest().setEndpoint(this.endpoint);
            if (query) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return this.client.service.count(request, this.client.authMetadata);
        });
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.client.waitForHealthCheck();
            const request = new QueryRequest().setEndpoint(this.endpoint);
            if (query) {
                request.setQuery(QueryHelper.convertSchema(query));
            }
            return this.client.service.query(request, this.client.authMetadata).then((response) => {
                const mapper = new RecordMapper(response.getFieldsList());
                return [
                    response.getFieldsList(),
                    response.getRecordsList().map(v => { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); }),
                ];
            });
        });
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.client.waitForHealthCheck();
            return this.client.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.client.authMetadata);
        });
    }
    ensureFields() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.fieldsResponse) {
                return Promise.resolve(this.fieldsResponse);
            }
            if (this.fieldsResponseLoading) {
                return new Promise((resolve) => {
                    this.fieldsResponseCallback.push(resolve);
                });
            }
            this.fieldsResponseLoading = true;
            return this.getFields().then((response) => {
                this.fieldsResponse = response;
                this.fieldsResponseLoading = false;
                this.fieldsResponseCallback.forEach((cb) => cb(this.fieldsResponse));
                return this.fieldsResponse;
            });
        });
    }
    onEvent(callback, eventType = EventType.ALL, filter) {
        let stream = null;
        const onEventRequest = new OnEventRequest()
            .setEndpoint(this.endpoint)
            .setType(eventType);
        if (filter) {
            onEventRequest.setFilter(QueryHelper.convertFilter(filter));
        }
        stream = this.client.service.onEvent(onEventRequest, this.client.authMetadata);
        stream.on('data', (operation) => {
            this.ensureFields().then((fieldsResponse) => {
                var _a;
                const fields = fieldsResponse.getFieldsList();
                const mapper = new RecordMapper(fields);
                const primaryIndexKeys = fieldsResponse.getPrimaryIndexList().map(index => fields[index].getName());
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
        });
        stream.on('error', (err) => {
            console.error(err);
            stream === null || stream === void 0 ? void 0 : stream.cancel();
        });
        return stream;
    }
}
