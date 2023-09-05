"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGrpcServiceClientImpl = exports.GetAuthTokenResponse = exports.GetAuthTokenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "dozer.auth";
function createBaseGetAuthTokenRequest() {
    return { accessFilter: "" };
}
exports.GetAuthTokenRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.accessFilter !== "") {
            writer.uint32(10).string(message.accessFilter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { accessFilter: isSet(object.accessFilter) ? String(object.accessFilter) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.accessFilter !== undefined && (obj.accessFilter = message.accessFilter);
        return obj;
    },
    create: function (base) {
        return exports.GetAuthTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAuthTokenRequest();
        message.accessFilter = (_a = object.accessFilter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAuthTokenResponse() {
    return { token: "" };
}
exports.GetAuthTokenResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthTokenResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { token: isSet(object.token) ? String(object.token) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create: function (base) {
        return exports.GetAuthTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAuthTokenResponse();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
var AuthGrpcServiceClientImpl = /** @class */ (function () {
    function AuthGrpcServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.auth.AuthGrpcService";
        this.rpc = rpc;
        this.getAuthToken = this.getAuthToken.bind(this);
    }
    AuthGrpcServiceClientImpl.prototype.getAuthToken = function (request) {
        var data = exports.GetAuthTokenRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "getAuthToken", data);
        return promise.then(function (data) { return exports.GetAuthTokenResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return AuthGrpcServiceClientImpl;
}());
exports.AuthGrpcServiceClientImpl = AuthGrpcServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
