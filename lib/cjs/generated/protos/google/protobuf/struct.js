"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        case NullValue.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.nullValueToJSON = nullValueToJSON;
function createBaseStruct() {
    return { fields: {} };
}
exports.Struct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        Object.entries(message.fields).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                exports.Struct_FieldsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStruct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.fields[k] = v;
            });
        }
        return obj;
    },
    create: function (base) {
        return exports.Struct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStruct();
        message.fields = Object.entries((_a = object.fields) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap: function (object) {
        var struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach(function (key) {
                struct.fields[key] = object[key];
            });
        }
        return struct;
    },
    unwrap: function (message) {
        var object = {};
        if (message.fields) {
            Object.keys(message.fields).forEach(function (key) {
                object[key] = message.fields[key];
            });
        }
        return object;
    },
};
function createBaseStruct_FieldsEntry() {
    return { key: "", value: undefined };
}
exports.Struct_FieldsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStruct_FieldsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object === null || object === void 0 ? void 0 : object.value) ? object.value : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create: function (base) {
        return exports.Struct_FieldsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStruct_FieldsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseValue() {
    return {
        nullValue: undefined,
        numberValue: undefined,
        stringValue: undefined,
        boolValue: undefined,
        structValue: undefined,
        listValue: undefined,
    };
}
exports.Value = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.structValue), writer.uint32(42).fork()).ldelim();
        }
        if (message.listValue !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.listValue), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nullValue = reader.int32();
                    break;
                case 2:
                    message.numberValue = reader.double();
                    break;
                case 3:
                    message.stringValue = reader.string();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                case 5:
                    message.structValue = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.listValue = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
            numberValue: isSet(object.numberValue) ? Number(object.numberValue) : undefined,
            stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
            boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
            structValue: isObject(object.structValue) ? object.structValue : undefined,
            listValue: Array.isArray(object.listValue) ? __spreadArray([], object.listValue, true) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nullValue !== undefined &&
            (obj.nullValue = message.nullValue !== undefined ? nullValueToJSON(message.nullValue) : undefined);
        message.numberValue !== undefined && (obj.numberValue = message.numberValue);
        message.stringValue !== undefined && (obj.stringValue = message.stringValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        message.structValue !== undefined && (obj.structValue = message.structValue);
        message.listValue !== undefined && (obj.listValue = message.listValue);
        return obj;
    },
    create: function (base) {
        return exports.Value.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseValue();
        message.nullValue = (_a = object.nullValue) !== null && _a !== void 0 ? _a : undefined;
        message.numberValue = (_b = object.numberValue) !== null && _b !== void 0 ? _b : undefined;
        message.stringValue = (_c = object.stringValue) !== null && _c !== void 0 ? _c : undefined;
        message.boolValue = (_d = object.boolValue) !== null && _d !== void 0 ? _d : undefined;
        message.structValue = (_e = object.structValue) !== null && _e !== void 0 ? _e : undefined;
        message.listValue = (_f = object.listValue) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
    wrap: function (value) {
        var result = createBaseValue();
        if (value === null) {
            result.nullValue = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.boolValue = value;
        }
        else if (typeof value === "number") {
            result.numberValue = value;
        }
        else if (typeof value === "string") {
            result.stringValue = value;
        }
        else if (Array.isArray(value)) {
            result.listValue = value;
        }
        else if (typeof value === "object") {
            result.structValue = value;
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap: function (message) {
        if (message.stringValue !== undefined) {
            return message.stringValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.numberValue) !== undefined) {
            return message.numberValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.boolValue) !== undefined) {
            return message.boolValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.structValue) !== undefined) {
            return message.structValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.listValue) !== undefined) {
            return message.listValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.nullValue) !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
exports.ListValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? __spreadArray([], object.values, true) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.values) {
            obj.values = message.values.map(function (e) { return e; });
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.ListValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListValue();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    wrap: function (array) {
        var result = createBaseListValue();
        result.values = array !== null && array !== void 0 ? array : [];
        return result;
    },
    unwrap: function (message) {
        if ((message === null || message === void 0 ? void 0 : message.hasOwnProperty("values")) && Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
