"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DozerEndpoint = exports.DozerClient = exports.ApiClient = void 0;
var CommonServiceClientPb_1 = require("./generated/protos/CommonServiceClientPb");
var types_pb_js_1 = require("./generated/protos/types_pb.js");
var helper_1 = require("./helper");
var common_pb_1 = require("./generated/protos/common_pb");
var query_helper_1 = require("./query_helper");
var HealthServiceClientPb_1 = require("./generated/protos/HealthServiceClientPb");
var health_pb_1 = require("./generated/protos/health_pb");
var defaultApiClientOptions = {
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
var ApiClient = /** @class */ (function () {
    function ApiClient(endpoint, clientOptions) {
        var options = __assign(__assign({}, defaultApiClientOptions), clientOptions);
        this.endpoint = endpoint;
        this.authMetadata = (options.authToken ? { Authorization: 'Bearer ' + options.authToken } : {});
        this.service = new CommonServiceClientPb_1.CommonGrpcServiceClient(options.serverAddress, this.authMetadata);
        this.healthService = new HealthServiceClientPb_1.HealthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }
    ApiClient.prototype.healthCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.healthService.healthCheck(new health_pb_1.HealthCheckRequest(), this.authMetadata)];
            });
        });
    };
    ApiClient.prototype.count = function (query) {
        if (query === void 0) { query = null; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
                if (query !== null) {
                    request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
                }
                return [2 /*return*/, this.service.count(request, this.authMetadata)];
            });
        });
    };
    ApiClient.prototype.query = function (query) {
        if (query === void 0) { query = null; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
                        if (query !== null) {
                            request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
                        }
                        return [4 /*yield*/, this.service.query(request, this.authMetadata).then(function (response) {
                                var mapper = new helper_1.RecordMapper(response.getFieldsList());
                                return [
                                    response.getFieldsList(),
                                    response.getRecordsList().map(function (v) { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); })
                                ];
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiClient.prototype.onEvent = function (eventType, filter) {
        if (eventType === void 0) { eventType = types_pb_js_1.EventType.ALL; }
        if (filter === void 0) { filter = null; }
        var eventFilter = new types_pb_js_1.EventFilter()
            .setType(eventType);
        if (filter) {
            eventFilter.setFilter(query_helper_1.QueryHelper.convertFilter(filter));
        }
        var onEventRequest = new common_pb_1.OnEventRequest();
        onEventRequest
            .getEndpointsMap()
            .set(this.endpoint, eventFilter);
        return this.service.onEvent(onEventRequest, this.authMetadata);
    };
    ApiClient.prototype.getFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ApiClient;
}());
exports.ApiClient = ApiClient;
var defaultDozerClientOptions = {
    serverAddress: "http://localhost:50051",
    authToken: null,
    headers: {}
};
var DozerClient = /** @class */ (function () {
    function DozerClient(options) {
        this.authMetadata = {};
        this.options = __assign(__assign({}, defaultDozerClientOptions), options);
        this.authMetadata = (this.options.authToken ? { Authorization: 'Bearer ' + this.options.authToken } : {});
        Object.assign(this.authMetadata, this.options.headers);
        this.service = new CommonServiceClientPb_1.CommonGrpcServiceClient(this.options.serverAddress, this.authMetadata);
        this.healthService = new HealthServiceClientPb_1.HealthGrpcServiceClient(this.options.serverAddress, this.authMetadata);
    }
    DozerClient.prototype.healthCheck = function () {
        return this.healthService.healthCheck(new health_pb_1.HealthCheckRequest(), this.authMetadata);
    };
    DozerClient.prototype.waitForHealthCheck = function (retry) {
        if (retry === void 0) { retry = 5; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthCheck()];
                    case 1:
                        response = _a.sent();
                        if (response.getStatus() === health_pb_1.HealthCheckResponse.ServingStatus.SERVING) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (retry > 0) {
                            return [2 /*return*/, this.waitForHealthCheck(retry - 1)];
                        }
                        return [2 /*return*/, Promise.reject(response.getStatus())];
                }
            });
        });
    };
    DozerClient.prototype.getEndpoints = function () {
        return this.service.getEndpoints(new common_pb_1.GetEndpointsRequest(), this.authMetadata);
    };
    DozerClient.prototype.getEndpoint = function (endpoint) {
        return new DozerEndpoint(endpoint, this);
    };
    return DozerClient;
}());
exports.DozerClient = DozerClient;
var DozerEndpoint = /** @class */ (function () {
    function DozerEndpoint(endpoint, client) {
        this.fieldsResponseLoading = false;
        this.fieldsResponseCallback = [];
        this.endpoint = endpoint;
        this.client = client;
    }
    DozerEndpoint.prototype.count = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
                if (query) {
                    request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
                }
                return [2 /*return*/, this.client.service.count(request, this.client.authMetadata)];
            });
        });
    };
    DozerEndpoint.prototype.query = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = new common_pb_1.QueryRequest().setEndpoint(this.endpoint);
                if (query) {
                    request.setQuery(query_helper_1.QueryHelper.convertSchema(query));
                }
                return [2 /*return*/, this.client.service.query(request, this.client.authMetadata).then(function (response) {
                        var mapper = new helper_1.RecordMapper(response.getFieldsList());
                        return [
                            response.getFieldsList(),
                            response.getRecordsList().map(function (v) { var _a, _b; return mapper.mapRecord((_b = (_a = v.getRecord()) === null || _a === void 0 ? void 0 : _a.getValuesList()) !== null && _b !== void 0 ? _b : []); }),
                        ];
                    })];
            });
        });
    };
    DozerEndpoint.prototype.getFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await this.client.waitForHealthCheck();
                return [2 /*return*/, this.client.service.getFields(new common_pb_1.GetFieldsRequest().setEndpoint(this.endpoint), this.client.authMetadata)];
            });
        });
    };
    DozerEndpoint.prototype.ensureFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.fieldsResponse) {
                    return [2 /*return*/, Promise.resolve(this.fieldsResponse)];
                }
                if (this.fieldsResponseLoading) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.fieldsResponseCallback.push(resolve);
                        })];
                }
                this.fieldsResponseLoading = true;
                return [2 /*return*/, this.getFields().then(function (response) {
                        _this.fieldsResponse = response;
                        _this.fieldsResponseLoading = false;
                        _this.fieldsResponseCallback.forEach(function (cb) { return cb(_this.fieldsResponse); });
                        return _this.fieldsResponse;
                    })];
            });
        });
    };
    DozerEndpoint.prototype.onEvent = function (callback, eventType, filter) {
        var _this = this;
        if (eventType === void 0) { eventType = types_pb_js_1.EventType.ALL; }
        var stream = null;
        var eventFilter = new types_pb_js_1.EventFilter()
            .setType(eventType);
        if (filter) {
            eventFilter.setFilter(query_helper_1.QueryHelper.convertFilter(filter));
        }
        var onEventRequest = new common_pb_1.OnEventRequest();
        onEventRequest
            .getEndpointsMap()
            .set(this.endpoint, eventFilter);
        stream = this.client.service.onEvent(onEventRequest, this.client.authMetadata);
        stream.on('data', function (operation) {
            _this.ensureFields().then(function (fieldsResponse) {
                var _a;
                var fields = fieldsResponse.getFieldsList();
                var mapper = new helper_1.RecordMapper(fields);
                var primaryIndexKeys = fieldsResponse.getPrimaryIndexList().map(function (index) { return fields[index].getName(); });
                var oldValue = operation.getOld();
                var newValue = operation.getNew();
                var data = {
                    typ: operation.getTyp(),
                    old: oldValue ? mapper.mapRecord(oldValue.getValuesList()) : undefined,
                    new: newValue ? mapper.mapRecord(newValue.getValuesList()) : undefined,
                    newId: (_a = operation.getNewId()) !== null && _a !== void 0 ? _a : undefined,
                    endpointName: operation.getEndpointName(),
                };
                callback({ data: data, fields: fields, primaryIndexKeys: primaryIndexKeys, operation: operation, mapper: mapper });
            });
        });
        stream.on('error', function (err) {
            console.error(err);
            stream === null || stream === void 0 ? void 0 : stream.cancel();
        });
        return stream;
    };
    return DozerEndpoint;
}());
exports.DozerEndpoint = DozerEndpoint;
