"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthGrpcServiceClientImpl = exports.HealthCheckResponse = exports.HealthCheckRequest = exports.healthCheckResponse_ServingStatusToJSON = exports.healthCheckResponse_ServingStatusFromJSON = exports.HealthCheckResponse_ServingStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operators_1 = require("rxjs/operators");
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthCheckRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { service: isSet(object.service) ? String(object.service) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.HealthCheckRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHealthCheckRequest();
        message.service = object.service ?? "";
        return message;
    },
};
function createBaseHealthCheckResponse() {
    return { status: 0 };
}
exports.HealthCheckResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthCheckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { status: isSet(object.status) ? healthCheckResponse_ServingStatusFromJSON(object.status) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = healthCheckResponse_ServingStatusToJSON(message.status));
        return obj;
    },
    create(base) {
        return exports.HealthCheckResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHealthCheckResponse();
        message.status = object.status ?? 0;
        return message;
    },
};
class HealthGrpcServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "dozer.health.HealthGrpcService";
        this.rpc = rpc;
        this.healthCheck = this.healthCheck.bind(this);
        this.healthWatch = this.healthWatch.bind(this);
    }
    healthCheck(request) {
        const data = exports.HealthCheckRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "healthCheck", data);
        return promise.then((data) => exports.HealthCheckResponse.decode(new minimal_1.default.Reader(data)));
    }
    healthWatch(request) {
        const data = exports.HealthCheckRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, "healthWatch", data);
        return result.pipe((0, operators_1.map)((data) => exports.HealthCheckResponse.decode(new minimal_1.default.Reader(data))));
    }
}
exports.HealthGrpcServiceClientImpl = HealthGrpcServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=health.js.map