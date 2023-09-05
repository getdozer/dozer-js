"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthGrpcServiceClientImpl = exports.HealthCheckResponse = exports.HealthCheckRequest = exports.healthCheckResponse_ServingStatusToJSON = exports.healthCheckResponse_ServingStatusFromJSON = exports.HealthCheckResponse_ServingStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var operators_1 = require("rxjs/operators");
exports.protobufPackage = "dozer.health";
var HealthCheckResponse_ServingStatus;
(function (HealthCheckResponse_ServingStatus) {
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVING"] = 1] = "SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["NOT_SERVING"] = 2] = "NOT_SERVING";
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVICE_UNKNOWN"] = 3] = "SERVICE_UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HealthCheckResponse_ServingStatus = exports.HealthCheckResponse_ServingStatus || (exports.HealthCheckResponse_ServingStatus = {}));
function healthCheckResponse_ServingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return HealthCheckResponse_ServingStatus.UNKNOWN;
        case 1:
        case "SERVING":
            return HealthCheckResponse_ServingStatus.SERVING;
        case 2:
        case "NOT_SERVING":
            return HealthCheckResponse_ServingStatus.NOT_SERVING;
        case 3:
        case "SERVICE_UNKNOWN":
            return HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HealthCheckResponse_ServingStatus.UNRECOGNIZED;
    }
}
exports.healthCheckResponse_ServingStatusFromJSON = healthCheckResponse_ServingStatusFromJSON;
function healthCheckResponse_ServingStatusToJSON(object) {
    switch (object) {
        case HealthCheckResponse_ServingStatus.UNKNOWN:
            return "UNKNOWN";
        case HealthCheckResponse_ServingStatus.SERVING:
            return "SERVING";
        case HealthCheckResponse_ServingStatus.NOT_SERVING:
            return "NOT_SERVING";
        case HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN:
            return "SERVICE_UNKNOWN";
        case HealthCheckResponse_ServingStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.healthCheckResponse_ServingStatusToJSON = healthCheckResponse_ServingStatusToJSON;
function createBaseHealthCheckRequest() {
    return { service: "" };
}
exports.HealthCheckRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHealthCheckRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.service = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { service: isSet(object.service) ? String(object.service) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create: function (base) {
        return exports.HealthCheckRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseHealthCheckRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseHealthCheckResponse() {
    return { status: 0 };
}
exports.HealthCheckResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHealthCheckResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? healthCheckResponse_ServingStatusFromJSON(object.status) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = healthCheckResponse_ServingStatusToJSON(message.status));
        return obj;
    },
    create: function (base) {
        return exports.HealthCheckResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseHealthCheckResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
var HealthGrpcServiceClientImpl = /** @class */ (function () {
    function HealthGrpcServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.health.HealthGrpcService";
        this.rpc = rpc;
        this.healthCheck = this.healthCheck.bind(this);
        this.healthWatch = this.healthWatch.bind(this);
    }
    HealthGrpcServiceClientImpl.prototype.healthCheck = function (request) {
        var data = exports.HealthCheckRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "healthCheck", data);
        return promise.then(function (data) { return exports.HealthCheckResponse.decode(new minimal_1.default.Reader(data)); });
    };
    HealthGrpcServiceClientImpl.prototype.healthWatch = function (request) {
        var data = exports.HealthCheckRequest.encode(request).finish();
        var result = this.rpc.serverStreamingRequest(this.service, "healthWatch", data);
        return result.pipe((0, operators_1.map)(function (data) { return exports.HealthCheckResponse.decode(new minimal_1.default.Reader(data)); }));
    };
    return HealthGrpcServiceClientImpl;
}());
exports.HealthGrpcServiceClientImpl = HealthGrpcServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
