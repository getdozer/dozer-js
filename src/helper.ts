import {FieldDefinition, Type, Value} from "../generated/protos/types";

function convertValue(typ: Type, object: Value): any {
    switch (typ) {
        case Type.UInt:
            return object.uintValue;
        case Type.Int:
            return object.intValue;
        case Type.Float:
            return object.floatValue;
        case Type.Boolean:
            return object.boolValue;
        case Type.String:
            return object.stringValue;
        case Type.Text:
            return object.stringValue;
        case Type.Binary:
            return object.bytesValue;
        case Type.Decimal:
            return object.decimalValue;
        case Type.Timestamp:
            return object.timestampValue;
        case Type.Date:
            return object.dateValue;
        case Type.Bson:
            return object.bytesValue;
        case Type.Point:
            return object.pointValue;
        case Type.UNRECOGNIZED:
            return undefined;
    }
}

export class RecordMapper {
    private fields: FieldDefinition[];

    constructor(fields: FieldDefinition[]) {
        this.fields = fields;
    }

     mapRecord(values: Object[]): Object {
         let result = {};
         values.forEach((v, index) => {
             result[this.fields[index].name] = convertValue(this.fields[index].typ, values[index]);
         });
         return result;
     }
}