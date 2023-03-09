"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordMapper = void 0;
const types_pb_1 = require("./generated/protos/types_pb");
function convertValue(typ, object) {
    switch (typ) {
        case types_pb_1.Type.UINT:
            return object.getUintValue();
        case types_pb_1.Type.INT:
            return object.getIntValue();
        case types_pb_1.Type.FLOAT:
            return object.getFloatValue();
        case types_pb_1.Type.BOOLEAN:
            return object.getBoolValue();
        case types_pb_1.Type.STRING:
            return object.getStringValue();
        case types_pb_1.Type.TEXT:
            return object.getStringValue();
        case types_pb_1.Type.BINARY:
            return object.getBytesValue();
        case types_pb_1.Type.DECIMAL:
            return object.getDecimalValue();
        case types_pb_1.Type.TIMESTAMP:
            return object.getTimestampValue();
        case types_pb_1.Type.DATE:
            return object.getDateValue();
        case types_pb_1.Type.BSON:
            return object.getBytesValue();
        case types_pb_1.Type.POINT:
            return object.getPointValue();
    }
    return undefined;
}
class RecordMapper {
    fields;
    constructor(fields) {
        this.fields = fields;
    }
    mapRecord(values) {
        let result = {};
        values.forEach((v, index) => {
            result[this.fields[index].getName()] = convertValue(this.fields[index].getTyp(), values[index]);
        });
        return result;
    }
}
exports.RecordMapper = RecordMapper;
//# sourceMappingURL=helper.js.map