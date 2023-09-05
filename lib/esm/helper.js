import { Type } from "./generated/protos/types_pb.js";
function convertValue(typ, object) {
    switch (typ) {
        case Type.UINT:
            return object.getUintValue();
        case Type.INT:
            return object.getIntValue();
        case Type.FLOAT:
            return object.getFloatValue();
        case Type.BOOLEAN:
            return object.getBoolValue();
        case Type.STRING:
            return object.getStringValue();
        case Type.TEXT:
            return object.getStringValue();
        case Type.BINARY:
            return object.getBytesValue();
        case Type.DECIMAL:
            return object.getDecimalValue();
        case Type.TIMESTAMP:
            return object.getTimestampValue();
        case Type.DATE:
            return object.getDateValue();
        case Type.JSON:
            return object.getBytesValue();
        case Type.POINT:
            return object.getPointValue();
    }
    return undefined;
}
export class RecordMapper {
    constructor(fields) {
        this.fields = fields;
    }
    mapRecord(values) {
        let result = {};
        values.forEach((_, index) => {
            result[this.fields[index].getName()] = convertValue(this.fields[index].getTyp(), values[index]);
        });
        return result;
    }
}
