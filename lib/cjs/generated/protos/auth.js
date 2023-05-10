"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGrpcServiceClientImpl = exports.GetAuthTokenResponse = exports.GetAuthTokenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "dozer.auth";
function createBaseGetAuthTokenRequest() {
    return { accessFilter: "" };
}
exports.GetAuthTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessFilter !== "") {
            writer.uint32(10).string(message.accessFilter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessFilter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { accessFilter: isSet(object.accessFilter) ? String(object.accessFilter) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accessFilter !== undefined && (obj.accessFilter = message.accessFilter);
        return obj;
    },
    create(base) {
        return exports.GetAuthTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAuthTokenRequest();
        message.accessFilter = (_a = object.accessFilter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAuthTokenResponse() {
    return { token: "" };
}
exports.GetAuthTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? String(object.token) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create(base) {
        return exports.GetAuthTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAuthTokenResponse();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class AuthGrpcServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.auth.AuthGrpcService";
        this.rpc = rpc;
        this.getAuthToken = this.getAuthToken.bind(this);
    }
    getAuthToken(request) {
        const data = exports.GetAuthTokenRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getAuthToken", data);
        return promise.then((data) => exports.GetAuthTokenResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.AuthGrpcServiceClientImpl = AuthGrpcServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
