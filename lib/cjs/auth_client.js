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
exports.AuthClient = void 0;
const auth_pb_1 = require("./generated/protos/auth_pb");
const AuthServiceClientPb_1 = require("./generated/protos/AuthServiceClientPb");
const defaultAuthClientOptions = {
    serverAddress: 'http://localhost:50051',
    authToken: null
};
class AuthClient {
    constructor(clientOptions) {
        const options = Object.assign(Object.assign({}, defaultAuthClientOptions), clientOptions);
        this.authMetadata = (options.authToken ? { Authorization: 'Bearer ' + options.authToken } : {});
        this.service = new AuthServiceClientPb_1.AuthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }
    getAuthToken(accessFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new auth_pb_1.GetAuthTokenRequest().setAccessFilter(accessFilter);
            return yield this.service.getAuthToken(request, this.authMetadata);
        });
    }
}
exports.AuthClient = AuthClient;
