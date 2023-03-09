/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { map } from "rxjs/operators";
import { operationTypeFromJSON as operationTypeFromJSON2, operationTypeToJSON as operationTypeToJSON3, Record, } from "./types";
export const protobufPackage = "dozer.ingest";
/** The event types. */
export var OperationType;
(function (OperationType) {
    /** INSERT - INSERT operation. */
    OperationType[OperationType["INSERT"] = 0] = "INSERT";
    /** DELETE - DELETE operation. */
    OperationType[OperationType["DELETE"] = 1] = "DELETE";
    /** UPDATE - UPDATE operation. */
    OperationType[OperationType["UPDATE"] = 2] = "UPDATE";
    OperationType[OperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationType || (OperationType = {}));
export function operationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "INSERT":
            return OperationType.INSERT;
        case 1:
        case "DELETE":
            return OperationType.DELETE;
        case 2:
        case "UPDATE":
            return OperationType.UPDATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OperationType.UNRECOGNIZED;
    }
}
export function operationTypeToJSON(object) {
    switch (object) {
        case OperationType.INSERT:
            return "INSERT";
        case OperationType.DELETE:
            return "DELETE";
        case OperationType.UPDATE:
            return "UPDATE";
        case OperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseIngestRequest() {
    return { schemaName: "", typ: 0, old: undefined, new: undefined, seqNo: 0 };
}
export const IngestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.schemaName !== "") {
            writer.uint32(10).string(message.schemaName);
        }
        if (message.typ !== 0) {
            writer.uint32(16).int32(message.typ);
        }
        if (message.old !== undefined) {
            Record.encode(message.old, writer.uint32(26).fork()).ldelim();
        }
        if (message.new !== undefined) {
            Record.encode(message.new, writer.uint32(34).fork()).ldelim();
        }
        if (message.seqNo !== 0) {
            writer.uint32(40).uint32(message.seqNo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaName = reader.string();
                    break;
                case 2:
                    message.typ = reader.int32();
                    break;
                case 3:
                    message.old = Record.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.new = Record.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.seqNo = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            schemaName: isSet(object.schemaName) ? String(object.schemaName) : "",
            typ: isSet(object.typ) ? operationTypeFromJSON2(object.typ) : 0,
            old: isSet(object.old) ? Record.fromJSON(object.old) : undefined,
            new: isSet(object.new) ? Record.fromJSON(object.new) : undefined,
            seqNo: isSet(object.seqNo) ? Number(object.seqNo) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.schemaName !== undefined && (obj.schemaName = message.schemaName);
        message.typ !== undefined && (obj.typ = operationTypeToJSON3(message.typ));
        message.old !== undefined && (obj.old = message.old ? Record.toJSON(message.old) : undefined);
        message.new !== undefined && (obj.new = message.new ? Record.toJSON(message.new) : undefined);
        message.seqNo !== undefined && (obj.seqNo = Math.round(message.seqNo));
        return obj;
    },
    create(base) {
        return IngestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIngestRequest();
        message.schemaName = (_a = object.schemaName) !== null && _a !== void 0 ? _a : "";
        message.typ = (_b = object.typ) !== null && _b !== void 0 ? _b : 0;
        message.old = (object.old !== undefined && object.old !== null) ? Record.fromPartial(object.old) : undefined;
        message.new = (object.new !== undefined && object.new !== null) ? Record.fromPartial(object.new) : undefined;
        message.seqNo = (_c = object.seqNo) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseIngestResponse() {
    return { seqNo: 0 };
}
export const IngestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.seqNo !== 0) {
            writer.uint32(8).uint32(message.seqNo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seqNo = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { seqNo: isSet(object.seqNo) ? Number(object.seqNo) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.seqNo !== undefined && (obj.seqNo = Math.round(message.seqNo));
        return obj;
    },
    create(base) {
        return IngestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIngestResponse();
        message.seqNo = (_a = object.seqNo) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseIngestArrowRequest() {
    return { schemaName: "", records: new Uint8Array(), seqNo: 0, metadata: {} };
}
export const IngestArrowRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.schemaName !== "") {
            writer.uint32(10).string(message.schemaName);
        }
        if (message.records.length !== 0) {
            writer.uint32(18).bytes(message.records);
        }
        if (message.seqNo !== 0) {
            writer.uint32(24).uint32(message.seqNo);
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            IngestArrowRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngestArrowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaName = reader.string();
                    break;
                case 2:
                    message.records = reader.bytes();
                    break;
                case 3:
                    message.seqNo = reader.uint32();
                    break;
                case 4:
                    const entry4 = IngestArrowRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            schemaName: isSet(object.schemaName) ? String(object.schemaName) : "",
            records: isSet(object.records) ? bytesFromBase64(object.records) : new Uint8Array(),
            seqNo: isSet(object.seqNo) ? Number(object.seqNo) : 0,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[Number(key)] = IngestMetadata.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.schemaName !== undefined && (obj.schemaName = message.schemaName);
        message.records !== undefined &&
            (obj.records = base64FromBytes(message.records !== undefined ? message.records : new Uint8Array()));
        message.seqNo !== undefined && (obj.seqNo = Math.round(message.seqNo));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = IngestMetadata.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return IngestArrowRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIngestArrowRequest();
        message.schemaName = (_a = object.schemaName) !== null && _a !== void 0 ? _a : "";
        message.records = (_b = object.records) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.seqNo = (_c = object.seqNo) !== null && _c !== void 0 ? _c : 0;
        message.metadata = Object.entries((_d = object.metadata) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = IngestMetadata.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseIngestArrowRequest_MetadataEntry() {
    return { key: 0, value: undefined };
}
export const IngestArrowRequest_MetadataEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).uint32(message.key);
        }
        if (message.value !== undefined) {
            IngestMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngestArrowRequest_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint32();
                    break;
                case 2:
                    message.value = IngestMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? Number(object.key) : 0,
            value: isSet(object.value) ? IngestMetadata.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = message.value ? IngestMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return IngestArrowRequest_MetadataEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIngestArrowRequest_MetadataEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : 0;
        message.value = (object.value !== undefined && object.value !== null)
            ? IngestMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseIngestMetadata() {
    return { typ: 0, version: 0 };
}
export const IngestMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.typ !== 0) {
            writer.uint32(8).int32(message.typ);
        }
        if (message.version !== 0) {
            writer.uint32(16).uint32(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngestMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typ = reader.int32();
                    break;
                case 2:
                    message.version = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            typ: isSet(object.typ) ? operationTypeFromJSON(object.typ) : 0,
            version: isSet(object.version) ? Number(object.version) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.typ !== undefined && (obj.typ = operationTypeToJSON(message.typ));
        message.version !== undefined && (obj.version = Math.round(message.version));
        return obj;
    },
    create(base) {
        return IngestMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIngestMetadata();
        message.typ = (_a = object.typ) !== null && _a !== void 0 ? _a : 0;
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
export class IngestServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "dozer.ingest.IngestService";
        this.rpc = rpc;
        this.ingest = this.ingest.bind(this);
        this.ingest_stream = this.ingest_stream.bind(this);
        this.ingest_arrow = this.ingest_arrow.bind(this);
        this.ingest_arrow_stream = this.ingest_arrow_stream.bind(this);
    }
    ingest(request) {
        const data = IngestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ingest", data);
        return promise.then((data) => IngestResponse.decode(new _m0.Reader(data)));
    }
    ingest_stream(request) {
        const data = request.pipe(map((request) => IngestRequest.encode(request).finish()));
        const promise = this.rpc.clientStreamingRequest(this.service, "ingest_stream", data);
        return promise.then((data) => IngestResponse.decode(new _m0.Reader(data)));
    }
    ingest_arrow(request) {
        const data = IngestArrowRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ingest_arrow", data);
        return promise.then((data) => IngestResponse.decode(new _m0.Reader(data)));
    }
    ingest_arrow_stream(request) {
        const data = request.pipe(map((request) => IngestArrowRequest.encode(request).finish()));
        const promise = this.rpc.clientStreamingRequest(this.service, "ingest_arrow_stream", data);
        return promise.then((data) => IngestResponse.decode(new _m0.Reader(data)));
    }
}
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
