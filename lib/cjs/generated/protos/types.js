"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.RustDecimal = exports.DurationType = exports.PointType = exports.FieldDefinition = exports.SchemaEvent = exports.RecordWithId = exports.Record = exports.Operation = exports.typeToJSON = exports.typeFromJSON = exports.Type = exports.operationTypeToJSON = exports.operationTypeFromJSON = exports.OperationType = exports.eventTypeToJSON = exports.eventTypeFromJSON = exports.EventType = exports.protobufPackage = void 0;
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
})(EventType || (exports.EventType = EventType = {}));
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
})(OperationType || (exports.OperationType = OperationType = {}));
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
    /** U128 - Unsigned 128 bit integer. */
    Type[Type["U128"] = 1] = "U128";
    /** Int - Signed 64 bit integer. */
    Type[Type["Int"] = 2] = "Int";
    /** I128 - Signed 128 bit integer. */
    Type[Type["I128"] = 3] = "I128";
    /** Float - 64 bit floating point number. */
    Type[Type["Float"] = 4] = "Float";
    /** Boolean - Boolean. */
    Type[Type["Boolean"] = 5] = "Boolean";
    /** String - UTF-8 string. */
    Type[Type["String"] = 6] = "String";
    /** Text - UTF-8 string. */
    Type[Type["Text"] = 7] = "Text";
    /** Binary - Binary data. */
    Type[Type["Binary"] = 8] = "Binary";
    /** Decimal - Decimal number. */
    Type[Type["Decimal"] = 9] = "Decimal";
    /** Timestamp - ISO 8601 combined date and time with time zone. */
    Type[Type["Timestamp"] = 10] = "Timestamp";
    /** Date - ISO 8601 calendar date without timezone. */
    Type[Type["Date"] = 11] = "Date";
    /** Bson - BSON data. */
    Type[Type["Bson"] = 12] = "Bson";
    /** Point - Geo Point type. */
    Type[Type["Point"] = 13] = "Point";
    /** Duration - Duration type. */
    Type[Type["Duration"] = 14] = "Duration";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type || (exports.Type = Type = {}));
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "UInt":
            return Type.UInt;
        case 1:
        case "U128":
            return Type.U128;
        case 2:
        case "Int":
            return Type.Int;
        case 3:
        case "I128":
            return Type.I128;
        case 4:
        case "Float":
            return Type.Float;
        case 5:
        case "Boolean":
            return Type.Boolean;
        case 6:
        case "String":
            return Type.String;
        case 7:
        case "Text":
            return Type.Text;
        case 8:
        case "Binary":
            return Type.Binary;
        case 9:
        case "Decimal":
            return Type.Decimal;
        case 10:
        case "Timestamp":
            return Type.Timestamp;
        case 11:
        case "Date":
            return Type.Date;
        case 12:
        case "Bson":
            return Type.Bson;
        case 13:
        case "Point":
            return Type.Point;
        case 14:
        case "Duration":
            return Type.Duration;
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
        case Type.U128:
            return "U128";
        case Type.Int:
            return "Int";
        case Type.I128:
            return "I128";
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
        case Type.Duration:
            return "Duration";
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
        return exports.Operation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOperation();
        message.typ = (_a = object.typ) !== null && _a !== void 0 ? _a : 0;
        message.old = (object.old !== undefined && object.old !== null) ? exports.Record.fromPartial(object.old) : undefined;
        message.new = (object.new !== undefined && object.new !== null) ? exports.Record.fromPartial(object.new) : undefined;
        message.newId = (_b = object.newId) !== null && _b !== void 0 ? _b : undefined;
        message.endpointName = (_c = object.endpointName) !== null && _c !== void 0 ? _c : "";
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
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => exports.Value.fromJSON(e)) : [],
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
        return exports.Record.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRecord();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Value.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : 0;
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
        return exports.RecordWithId.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRecordWithId();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
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
            primaryIndex: Array.isArray(object === null || object === void 0 ? void 0 : object.primaryIndex) ? object.primaryIndex.map((e) => Number(e)) : [],
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map((e) => exports.FieldDefinition.fromJSON(e)) : [],
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
        return exports.SchemaEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSchemaEvent();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : 0;
        message.primaryIndex = ((_c = object.primaryIndex) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.fields = ((_d = object.fields) === null || _d === void 0 ? void 0 : _d.map((e) => exports.FieldDefinition.fromPartial(e))) || [];
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
        return exports.FieldDefinition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFieldDefinition();
        message.typ = (_a = object.typ) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.nullable = (_c = object.nullable) !== null && _c !== void 0 ? _c : false;
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
        return exports.PointType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePointType();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDurationType() {
    return { value: "", timeUnit: "" };
}
exports.DurationType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.timeUnit !== "") {
            writer.uint32(18).string(message.timeUnit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDurationType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.timeUnit = reader.string();
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
            value: isSet(object.value) ? String(object.value) : "",
            timeUnit: isSet(object.timeUnit) ? String(object.timeUnit) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        message.timeUnit !== undefined && (obj.timeUnit = message.timeUnit);
        return obj;
    },
    create(base) {
        return exports.DurationType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDurationType();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        message.timeUnit = (_b = object.timeUnit) !== null && _b !== void 0 ? _b : "";
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
        return exports.RustDecimal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRustDecimal();
        message.flags = (_a = object.flags) !== null && _a !== void 0 ? _a : 0;
        message.lo = (_b = object.lo) !== null && _b !== void 0 ? _b : 0;
        message.mid = (_c = object.mid) !== null && _c !== void 0 ? _c : 0;
        message.hi = (_d = object.hi) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseValue() {
    return {
        uintValue: undefined,
        uint128Value: undefined,
        intValue: undefined,
        int128Value: undefined,
        floatValue: undefined,
        boolValue: undefined,
        stringValue: undefined,
        bytesValue: undefined,
        decimalValue: undefined,
        timestampValue: undefined,
        dateValue: undefined,
        pointValue: undefined,
        durationValue: undefined,
    };
}
exports.Value = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uintValue !== undefined) {
            writer.uint32(8).uint64(message.uintValue);
        }
        if (message.uint128Value !== undefined) {
            writer.uint32(18).string(message.uint128Value);
        }
        if (message.intValue !== undefined) {
            writer.uint32(24).int64(message.intValue);
        }
        if (message.int128Value !== undefined) {
            writer.uint32(34).string(message.int128Value);
        }
        if (message.floatValue !== undefined) {
            writer.uint32(41).double(message.floatValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(48).bool(message.boolValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(58).string(message.stringValue);
        }
        if (message.bytesValue !== undefined) {
            writer.uint32(66).bytes(message.bytesValue);
        }
        if (message.decimalValue !== undefined) {
            exports.RustDecimal.encode(message.decimalValue, writer.uint32(74).fork()).ldelim();
        }
        if (message.timestampValue !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestampValue), writer.uint32(82).fork()).ldelim();
        }
        if (message.dateValue !== undefined) {
            writer.uint32(90).string(message.dateValue);
        }
        if (message.pointValue !== undefined) {
            exports.PointType.encode(message.pointValue, writer.uint32(98).fork()).ldelim();
        }
        if (message.durationValue !== undefined) {
            exports.DurationType.encode(message.durationValue, writer.uint32(106).fork()).ldelim();
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
                    message.uint128Value = reader.string();
                    break;
                case 3:
                    message.intValue = longToNumber(reader.int64());
                    break;
                case 4:
                    message.int128Value = reader.string();
                    break;
                case 5:
                    message.floatValue = reader.double();
                    break;
                case 6:
                    message.boolValue = reader.bool();
                    break;
                case 7:
                    message.stringValue = reader.string();
                    break;
                case 8:
                    message.bytesValue = reader.bytes();
                    break;
                case 9:
                    message.decimalValue = exports.RustDecimal.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.timestampValue = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.dateValue = reader.string();
                    break;
                case 12:
                    message.pointValue = exports.PointType.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.durationValue = exports.DurationType.decode(reader, reader.uint32());
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
            uint128Value: isSet(object.uint128Value) ? String(object.uint128Value) : undefined,
            intValue: isSet(object.intValue) ? Number(object.intValue) : undefined,
            int128Value: isSet(object.int128Value) ? String(object.int128Value) : undefined,
            floatValue: isSet(object.floatValue) ? Number(object.floatValue) : undefined,
            boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
            stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
            bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined,
            decimalValue: isSet(object.decimalValue) ? exports.RustDecimal.fromJSON(object.decimalValue) : undefined,
            timestampValue: isSet(object.timestampValue) ? fromJsonTimestamp(object.timestampValue) : undefined,
            dateValue: isSet(object.dateValue) ? String(object.dateValue) : undefined,
            pointValue: isSet(object.pointValue) ? exports.PointType.fromJSON(object.pointValue) : undefined,
            durationValue: isSet(object.durationValue) ? exports.DurationType.fromJSON(object.durationValue) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.uintValue !== undefined && (obj.uintValue = Math.round(message.uintValue));
        message.uint128Value !== undefined && (obj.uint128Value = message.uint128Value);
        message.intValue !== undefined && (obj.intValue = Math.round(message.intValue));
        message.int128Value !== undefined && (obj.int128Value = message.int128Value);
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
        message.durationValue !== undefined &&
            (obj.durationValue = message.durationValue ? exports.DurationType.toJSON(message.durationValue) : undefined);
        return obj;
    },
    create(base) {
        return exports.Value.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseValue();
        message.uintValue = (_a = object.uintValue) !== null && _a !== void 0 ? _a : undefined;
        message.uint128Value = (_b = object.uint128Value) !== null && _b !== void 0 ? _b : undefined;
        message.intValue = (_c = object.intValue) !== null && _c !== void 0 ? _c : undefined;
        message.int128Value = (_d = object.int128Value) !== null && _d !== void 0 ? _d : undefined;
        message.floatValue = (_e = object.floatValue) !== null && _e !== void 0 ? _e : undefined;
        message.boolValue = (_f = object.boolValue) !== null && _f !== void 0 ? _f : undefined;
        message.stringValue = (_g = object.stringValue) !== null && _g !== void 0 ? _g : undefined;
        message.bytesValue = (_h = object.bytesValue) !== null && _h !== void 0 ? _h : undefined;
        message.decimalValue = (object.decimalValue !== undefined && object.decimalValue !== null)
            ? exports.RustDecimal.fromPartial(object.decimalValue)
            : undefined;
        message.timestampValue = (_j = object.timestampValue) !== null && _j !== void 0 ? _j : undefined;
        message.dateValue = (_k = object.dateValue) !== null && _k !== void 0 ? _k : undefined;
        message.pointValue = (object.pointValue !== undefined && object.pointValue !== null)
            ? exports.PointType.fromPartial(object.pointValue)
            : undefined;
        message.durationValue = (object.durationValue !== undefined && object.durationValue !== null)
            ? exports.DurationType.fromPartial(object.durationValue)
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
