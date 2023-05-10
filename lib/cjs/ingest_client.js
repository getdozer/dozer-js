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
exports.DozerIngestClient = void 0;
const IngestServiceClientPb_1 = require("./generated/protos/IngestServiceClientPb");
class DozerIngestClient {
    constructor(endpoint, server = 'localhost:8085') {
        this.endpoint = endpoint;
        this.service = new IngestServiceClientPb_1.IngestServiceClient(server);
    }
    ingest_raw(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.ingest(request, null);
        });
    }
    ingest_arrow(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.ingest_arrow(request, null);
        });
    }
}
exports.DozerIngestClient = DozerIngestClient;
