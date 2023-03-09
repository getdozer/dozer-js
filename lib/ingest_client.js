"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DozerIngestClient = void 0;
const IngestServiceClientPb_1 = require("./generated/protos/IngestServiceClientPb");
class DozerIngestClient {
    endpoint;
    service;
    constructor(endpoint, server = 'localhost:8085') {
        this.endpoint = endpoint;
        this.service = new IngestServiceClientPb_1.IngestServiceClient(server);
    }
    async ingest_raw(request) {
        return await this.service.ingest(request, null);
    }
    async ingest_arrow(request) {
        return await this.service.ingest_arrow(request, null);
    }
}
exports.DozerIngestClient = DozerIngestClient;
