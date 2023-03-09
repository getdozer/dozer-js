"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.RustDecimal = exports.PointType = exports.FieldDefinition = exports.SchemaEvent = exports.RecordWithId = exports.Record = exports.Operation = exports.typeToJSON = exports.typeFromJSON = exports.Type = exports.operationTypeToJSON = exports.operationTypeFromJSON = exports.OperationType = exports.eventTypeToJSON = exports.eventTypeFromJSON = exports.EventType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
exports.protobufPackage = "dozer.types";
/** Event types that user can subscribe. */
var EventType;
(function (EventType) {
    /** ALL - All events. */
    EventType[EventType["ALL"] = 0] = "ALL";
    /** INSERT_ONLY - Only INSERT events. */
    EventType[EventType["INSERT_ONLY"] = 1] = "INSERT_ONLY";
    /** UPDATE_ONLY - Only UPDATE events. */
    EventType[EventType["UPDATE_ONLY"] = 2] = "UPDATE_ONLY";
    /** DELETE_ONLY - Only DELETE events. */
    EventType[EventType["DELETE_ONLY"] = 3] = "DELETE_ONLY";
    EventType[EventType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EventType = exports.EventType || (exports.EventType = {}));
function eventTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ALL":
            return EventType.ALL;
        case 1:
        case "INSERT_ONLY":
            return EventType.INSERT_ONLY;
        case 2:
        case "UPDATE_ONLY":
            return EventType.UPDATE_ONLY;
        case 3:
        case "DELETE_ONLY":
            return EventType.DELETE_ONLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EventType.UNRECOGNIZED;
    }
}
exports.eventTypeFromJSON = eventTypeFromJSON;
function eventTypeToJSON(object) {
    switch (object) {
        case EventType.ALL:
            return "ALL";
        case EventType.INSERT_ONLY:
            return "INSERT_ONLY";
        case EventType.UPDATE_ONLY:
            return "UPDATE_ONLY";
        case EventType.DELETE_ONLY:
            return "DELETE_ONLY";
        case EventType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.eventTypeToJSON = eventTypeToJSON;
/** The event types. */
var OperationType;
(function (OperationType) {
    /** INSERT - INSERT operation. */
    OperationType[OperationType["INSERT"] = 0] = "INSERT";
    /** DELETE - DELETE operation. */
    OperationType[OperationType["DELETE"] = 1] = "DELETE";
    /** UPDATE - UPDATE operation. */
    OperationType[OperationType["UPDATE"] = 2] = "UPDATE";
    OperationType[OperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
function operationTypeFromJSON(object) {
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
exports.operationTypeFromJSON = operationTypeFromJSON;
function operationTypeToJSON(object) {
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
exports.operationTypeToJSON = operationTypeToJSON;
/** Supported data types in Dozer. */
var Type;
(function (Type) {
    /** UInt - Unsigned 64 bit integer. */
    Type[Type["UInt"] = 0] = "UInt";
    /** Int - Signed 64 bit integer. */
    Type[Type["Int"] = 1] = "Int";
    /** Float - 64 bit floating point number. */
    Type[Type["Float"] = 2] = "Float";
    /** Boolean - Boolean. */
    Type[Type["Boolean"] = 3] = "Boolean";
    /** String - UTF-8 string. */
    Type[Type["String"] = 4] = "String";
    /** Text - UTF-8 string. */
    Type[Type["Text"] = 5] = "Text";
    /** Binary - Binary data. */
    Type[Type["Binary"] = 6] = "Binary";
    /** Decimal - Decimal number. */
    Type[Type["Decimal"] = 7] = "Decimal";
    /** Timestamp - ISO 8601 combined date and time with time zone. */
    Type[Type["Timestamp"] = 8] = "Timestamp";
    /** Date - ISO 8601 calendar date without timezone. */
    Type[Type["Date"] = 9] = "Date";
    /** Bson - BSON data. */
    Type[Type["Bson"] = 10] = "Bson";
    /** Point - Geo Point type. */
    Type[Type["Point"] = 11] = "Point";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type = exports.Type || (exports.Type = {}));
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "UInt":
            return Type.UInt;
        case 1:
        case "Int":
            return Type.Int;
        case 2:
        case "Float":
            return Type.Float;
        case 3:
        case "Boolean":
            return Type.Boolean;
        case 4:
        case "String":
            return Type.String;
        case 5:
        case "Text":
            return Type.Text;
        case 6:
        case "Binary":
            return Type.Binary;
        case 7:
        case "Decimal":
            return Type.Decimal;
        case 8:
        case "Timestamp":
            return Type.Timestamp;
        case 9:
        case "Date":
            return Type.Date;
        case 10:
        case "Bson":
            return Type.Bson;
        case 11:
        case "Point":
            return Type.Point;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Type.UNRECOGNIZED;
    }
}
exports.typeFromJSON = typeFromJSON;
function typeToJSON(object) {
    switch (object) {
        case Type.UInt:
            return "UInt";
        case Type.Int:
            return "Int";
        case Type.Float:
            return "Float";
        case Type.Boolean:
            return "Boolean";
        case Type.String:
            return "String";
        case Type.Text:
            return "Text";
        case Type.Binary:
            return "Binary";
        case Type.Decimal:
            return "Decimal";
        case Type.Timestamp:
            return "Timestamp";
        case Type.Date:
            return "Date";
        case Type.Bson:
            return "Bson";
        case Type.Point:
            return "Point";
        case Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.typeToJSON = typeToJSON;
function createBaseOperation() {
    return { typ: 0, old: undefined, new: undefined, newId: undefined, endpointName: "" };
}
exports.Operation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.typ !== 0) {
            writer.uint32(8).int32(message.typ);
        }
        if (message.old !== undefined) {
            exports.Record.encode(message.old, writer.uint32(18).fork()).ldelim();
        }
        if (message.new !== undefined) {
            exports.Record.encode(message.new, writer.uint32(26).fork()).ldelim();
        }
        if (message.newId !== undefined) {
            writer.uint32(32).uint64(message.newId);
        }
        if (message.endpointName !== "") {
            writer.uint32(42).string(message.endpointName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typ = reader.int32();
                    break;
                case 2:
                    message.old = exports.Record.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.new = exports.Record.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.newId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.endpointName = reader.string();
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
            old: isSet(object.old) ? exports.Record.fromJSON(object.old) : undefined,
            new: isSet(object.new) ? exports.Record.fromJSON(object.new) : undefined,
            newId: isSet(object.newId) ? Number(object.newId) : undefined,
            endpointName: isSet(object.endpointName) ? String(object.endpointName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.typ !== undefined && (obj.typ = operationTypeToJSON(message.typ));
        message.old !== undefined && (obj.old = message.old ? exports.Record.toJSON(message.old) : undefined);
        message.new !== undefined && (obj.new = message.new ? exports.Record.toJSON(message.new) : undefined);
        message.newId !== undefined && (obj.newId = Math.round(message.newId));
        message.endpointName !== undefined && (obj.endpointName = message.endpointName);
        return obj;
    },
    create(base) {
        return exports.Operation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOperation();
        message.typ = object.typ ?? 0;
        message.old = (object.old !== undefined && object.old !== null) ? exports.Record.fromPartial(object.old) : undefined;
        message.new = (object.new !== undefined && object.new !== null) ? exports.Record.fromPartial(object.new) : undefined;
        message.newId = object.newId ?? undefined;
        message.endpointName = object.endpointName ?? "";
        return message;
    },
};
function createBaseRecord() {
    return { values: [], version: 0 };
}
exports.Record = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            exports.Value.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.version !== 0) {
            writer.uint32(16).uint32(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.Value.decode(reader, reader.uint32()));
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
            values: Array.isArray(object?.values) ? object.values.map((e) => exports.Value.fromJSON(e)) : [],
            version: isSet(object.version) ? Number(object.version) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? exports.Value.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        message.version !== undefined && (obj.version = Math.round(message.version));
        return obj;
    },
    create(base) {
        return exports.Record.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.values = object.values?.map((e) => exports.Value.fromPartial(e)) || [];
        message.version = object.version ?? 0;
        return message;
    },
};
function createBaseRecordWithId() {
    return { id: 0, record: undefined };
}
exports.RecordWithId = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.record !== undefined) {
            exports.Record.encode(message.record, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecordWithId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.record = exports.Record.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? Number(object.id) : 0,
            record: isSet(object.record) ? exports.Record.fromJSON(object.record) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.record !== undefined && (obj.record = message.record ? exports.Record.toJSON(message.record) : undefined);
        return obj;
    },
    create(base) {
        return exports.RecordWithId.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRecordWithId();
        message.id = object.id ?? 0;
        message.record = (object.record !== undefined && object.record !== null)
            ? exports.Record.fromPartial(object.record)
            : undefined;
        return message;
    },
};
function createBaseSchemaEvent() {
    return { endpoint: "", version: 0, primaryIndex: [], fields: [] };
}
exports.SchemaEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.version !== 0) {
            writer.uint32(16).uint64(message.version);
        }
        writer.uint32(26).fork();
        for (const v of message.primaryIndex) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.fields) {
            exports.FieldDefinition.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSchemaEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.string();
                    break;
                case 2:
                    message.version = longToNumber(reader.uint64());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.primaryIndex.push(reader.int32());
                        }
                    }
                    else {
                        message.primaryIndex.push(reader.int32());
                    }
                    break;
                case 4:
                    message.fields.push(exports.FieldDefinition.decode(reader, reader.uint32()));
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
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            version: isSet(object.version) ? Number(object.version) : 0,
            primaryIndex: Array.isArray(object?.primaryIndex) ? object.primaryIndex.map((e) => Number(e)) : [],
            fields: Array.isArray(object?.fields) ? object.fields.map((e) => exports.FieldDefinition.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.version !== undefined && (obj.version = Math.round(message.version));
        if (message.primaryIndex) {
            obj.primaryIndex = message.primaryIndex.map((e) => Math.round(e));
        }
        else {
            obj.primaryIndex = [];
        }
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? exports.FieldDefinition.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return exports.SchemaEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSchemaEvent();
        message.endpoint = object.endpoint ?? "";
        message.version = object.version ?? 0;
        message.primaryIndex = object.primaryIndex?.map((e) => e) || [];
        message.fields = object.fields?.map((e) => exports.FieldDefinition.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFieldDefinition() {
    return { typ: 0, name: "", nullable: false };
}
exports.FieldDefinition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.typ !== 0) {
            writer.uint32(8).int32(message.typ);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.nullable === true) {
            writer.uint32(24).bool(message.nullable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typ = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.nullable = reader.bool();
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
            typ: isSet(object.typ) ? typeFromJSON(object.typ) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            nullable: isSet(object.nullable) ? Boolean(object.nullable) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.typ !== undefined && (obj.typ = typeToJSON(message.typ));
        message.name !== undefined && (obj.name = message.name);
        message.nullable !== undefined && (obj.nullable = message.nullable);
        return obj;
    },
    create(base) {
        return exports.FieldDefinition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFieldDefinition();
        message.typ = object.typ ?? 0;
        message.name = object.name ?? "";
        message.nullable = object.nullable ?? false;
        return message;
    },
};
function createBasePointType() {
    return { x: 0, y: 0 };
}
exports.PointType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(9).double(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(17).double(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePointType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    create(base) {
        return exports.PointType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePointType();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        return message;
    },
};
function createBaseRustDecimal() {
    return { flags: 0, lo: 0, mid: 0, hi: 0 };
}
exports.RustDecimal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.flags !== 0) {
            writer.uint32(8).uint32(message.flags);
        }
        if (message.lo !== 0) {
            writer.uint32(16).uint32(message.lo);
        }
        if (message.mid !== 0) {
            writer.uint32(24).uint32(message.mid);
        }
        if (message.hi !== 0) {
            writer.uint32(32).uint32(message.hi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRustDecimal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.flags = reader.uint32();
                    break;
                case 2:
                    message.lo = reader.uint32();
                    break;
                case 3:
                    message.mid = reader.uint32();
                    break;
                case 4:
                    message.hi = reader.uint32();
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
            flags: isSet(object.flags) ? Number(object.flags) : 0,
            lo: isSet(object.lo) ? Number(object.lo) : 0,
            mid: isSet(object.mid) ? Number(object.mid) : 0,
            hi: isSet(object.hi) ? Number(object.hi) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.flags !== undefined && (obj.flags = Math.round(message.flags));
        message.lo !== undefined && (obj.lo = Math.round(message.lo));
        message.mid !== undefined && (obj.mid = Math.round(message.mid));
        message.hi !== undefined && (obj.hi = Math.round(message.hi));
        return obj;
    },
    create(base) {
        return exports.RustDecimal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRustDecimal();
        message.flags = object.flags ?? 0;
        message.lo = object.lo ?? 0;
        message.mid = object.mid ?? 0;
        message.hi = object.hi ?? 0;
        return message;
    },
};
function createBaseValue() {
    return {
        uintValue: undefined,
        intValue: undefined,
        floatValue: undefined,
        boolValue: undefined,
        stringValue: undefined,
        bytesValue: undefined,
        decimalValue: undefined,
        timestampValue: undefined,
        dateValue: undefined,
        pointValue: undefined,
    };
}
exports.Value = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uintValue !== undefined) {
            writer.uint32(8).uint64(message.uintValue);
        }
        if (message.intValue !== undefined) {
            writer.uint32(16).int64(message.intValue);
        }
        if (message.floatValue !== undefined) {
            writer.uint32(25).double(message.floatValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(42).string(message.stringValue);
        }
        if (message.bytesValue !== undefined) {
            writer.uint32(58).bytes(message.bytesValue);
        }
        if (message.decimalValue !== undefined) {
            exports.RustDecimal.encode(message.decimalValue, writer.uint32(66).fork()).ldelim();
        }
        if (message.timestampValue !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestampValue), writer.uint32(74).fork()).ldelim();
        }
        if (message.dateValue !== undefined) {
            writer.uint32(82).string(message.dateValue);
        }
        if (message.pointValue !== undefined) {
            exports.PointType.encode(message.pointValue, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uintValue = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.intValue = longToNumber(reader.int64());
                    break;
                case 3:
                    message.floatValue = reader.double();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                case 5:
                    message.stringValue = reader.string();
                    break;
                case 7:
                    message.bytesValue = reader.bytes();
                    break;
                case 8:
                    message.decimalValue = exports.RustDecimal.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.timestampValue = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.dateValue = reader.string();
                    break;
                case 11:
                    message.pointValue = exports.PointType.decode(reader, reader.uint32());
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
            uintValue: isSet(object.uintValue) ? Number(object.uintValue) : undefined,
            intValue: isSet(object.intValue) ? Number(object.intValue) : undefined,
            floatValue: isSet(object.floatValue) ? Number(object.floatValue) : undefined,
            boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
            stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
            bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined,
            decimalValue: isSet(object.decimalValue) ? exports.RustDecimal.fromJSON(object.decimalValue) : undefined,
            timestampValue: isSet(object.timestampValue) ? fromJsonTimestamp(object.timestampValue) : undefined,
            dateValue: isSet(object.dateValue) ? String(object.dateValue) : undefined,
            pointValue: isSet(object.pointValue) ? exports.PointType.fromJSON(object.pointValue) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.uintValue !== undefined && (obj.uintValue = Math.round(message.uintValue));
        message.intValue !== undefined && (obj.intValue = Math.round(message.intValue));
        message.floatValue !== undefined && (obj.floatValue = message.floatValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        message.stringValue !== undefined && (obj.stringValue = message.stringValue);
        message.bytesValue !== undefined &&
            (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
        message.decimalValue !== undefined &&
            (obj.decimalValue = message.decimalValue ? exports.RustDecimal.toJSON(message.decimalValue) : undefined);
        message.timestampValue !== undefined && (obj.timestampValue = message.timestampValue.toISOString());
        message.dateValue !== undefined && (obj.dateValue = message.dateValue);
        message.pointValue !== undefined &&
            (obj.pointValue = message.pointValue ? exports.PointType.toJSON(message.pointValue) : undefined);
        return obj;
    },
    create(base) {
        return exports.Value.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValue();
        message.uintValue = object.uintValue ?? undefined;
        message.intValue = object.intValue ?? undefined;
        message.floatValue = object.floatValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        message.stringValue = object.stringValue ?? undefined;
        message.bytesValue = object.bytesValue ?? undefined;
        message.decimalValue = (object.decimalValue !== undefined && object.decimalValue !== null)
            ? exports.RustDecimal.fromPartial(object.decimalValue)
            : undefined;
        message.timestampValue = object.timestampValue ?? undefined;
        message.dateValue = object.dateValue ?? undefined;
        message.pointValue = (object.pointValue !== undefined && object.pointValue !== null)
            ? exports.PointType.fromPartial(object.pointValue)
            : undefined;
        return message;
    },
};
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
