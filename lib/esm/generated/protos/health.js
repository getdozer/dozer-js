/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { map } from "rxjs/operators";
export const protobufPackage = "dozer.health";
export var HealthCheckResponse_ServingStatus;
(function (HealthCheckResponse_ServingStatus) {
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVING"] = 1] = "SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["NOT_SERVING"] = 2] = "NOT_SERVING";
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVICE_UNKNOWN"] = 3] = "SERVICE_UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HealthCheckResponse_ServingStatus || (HealthCheckResponse_ServingStatus = {}));
export function healthCheckResponse_ServingStatusFromJSON(object) {
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
export function healthCheckResponse_ServingStatusToJSON(object) {
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
function createBaseHealthCheckRequest() {
    return { service: "" };
}
export const HealthCheckRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return HealthCheckRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHealthCheckRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseHealthCheckResponse() {
    return { status: 0 };
}
export const HealthCheckResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return HealthCheckResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHealthCheckResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
export class HealthGrpcServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.health.HealthGrpcService";
        this.rpc = rpc;
        this.healthCheck = this.healthCheck.bind(this);
        this.healthWatch = this.healthWatch.bind(this);
    }
    healthCheck(request) {
        const data = HealthCheckRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "healthCheck", data);
        return promise.then((data) => HealthCheckResponse.decode(new _m0.Reader(data)));
    }
    healthWatch(request) {
        const data = HealthCheckRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, "healthWatch", data);
        return result.pipe(map((data) => HealthCheckResponse.decode(new _m0.Reader(data))));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
