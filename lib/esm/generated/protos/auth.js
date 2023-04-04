/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "dozer.auth";
function createBaseGetAuthTokenRequest() {
    return { accessFilter: "" };
}
export const GetAuthTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessFilter !== "") {
            writer.uint32(10).string(message.accessFilter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return GetAuthTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const GetAuthTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return GetAuthTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAuthTokenResponse();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
export class AuthGrpcServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.auth.AuthGrpcService";
        this.rpc = rpc;
        this.getAuthToken = this.getAuthToken.bind(this);
    }
    getAuthToken(request) {
        const data = GetAuthTokenRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "getAuthToken", data);
        return promise.then((data) => GetAuthTokenResponse.decode(new _m0.Reader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
