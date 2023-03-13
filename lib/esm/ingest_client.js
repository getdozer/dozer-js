var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IngestServiceClient } from "./generated/protos/IngestServiceClientPb";
export class DozerIngestClient {
    constructor(endpoint, server = 'localhost:8085') {
        this.endpoint = endpoint;
        this.service = new IngestServiceClient(server);
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