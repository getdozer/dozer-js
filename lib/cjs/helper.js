"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordMapper = void 0;
var types_pb_js_1 = require("./generated/protos/types_pb.js");
function convertValue(typ, object) {
    switch (typ) {
        case types_pb_js_1.Type.UINT:
            return object.getUintValue();
        case types_pb_js_1.Type.INT:
            return object.getIntValue();
        case types_pb_js_1.Type.FLOAT:
            return object.getFloatValue();
        case types_pb_js_1.Type.BOOLEAN:
            return object.getBoolValue();
        case types_pb_js_1.Type.STRING:
            return object.getStringValue();
        case types_pb_js_1.Type.TEXT:
            return object.getStringValue();
        case types_pb_js_1.Type.BINARY:
            return object.getBytesValue();
        case types_pb_js_1.Type.DECIMAL:
            return object.getDecimalValue();
        case types_pb_js_1.Type.TIMESTAMP:
            return object.getTimestampValue();
        case types_pb_js_1.Type.DATE:
            return object.getDateValue();
        case types_pb_js_1.Type.JSON:
            return object.getBytesValue();
        case types_pb_js_1.Type.POINT:
            return object.getPointValue();
    }
    return undefined;
}
var RecordMapper = /** @class */ (function () {
    function RecordMapper(fields) {
        this.fields = fields;
    }
    RecordMapper.prototype.mapRecord = function (values) {
        var _this = this;
        var result = {};
        values.forEach(function (_, index) {
            result[_this.fields[index].getName()] = convertValue(_this.fields[index].getTyp(), values[index]);
        });
        return result;
    };
    return RecordMapper;
}());
exports.RecordMapper = RecordMapper;
