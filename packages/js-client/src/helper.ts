import { FieldDefinition, Type, Value } from "./generated/protos/types_pb.js";
import { Value as StructValue } from './generated/protos/google/protobuf/struct.js';
window['StructValue'] = StructValue;

function convertValue(typ: Type, object: Value): any {
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
            return object.getJsonValue()?.toJavaScript();
        case Type.POINT:
            return object.getPointValue();
    }

    return undefined;
}

export class RecordMapper {
    private fields: FieldDefinition[];

    constructor(fields: FieldDefinition[]) {
        this.fields = fields;
    }

     mapRecord(values: Value[]): Object {
         let result: any = {};
         values.forEach((_, index) => {
             result[this.fields[index].getName()] = convertValue(this.fields[index].getTyp(), values[index]);
         });
         return result;
     }
}