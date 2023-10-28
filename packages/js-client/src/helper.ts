import { FieldDefinition, Type, Value, Record } from "./generated/protos/types_pb.js";
import { DozerRecord } from "./query_helper.js";

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

    mapRecord<T>(record: Record): DozerRecord<T> {
        const result = {
            __dozer_record_id: record.getId(),
            __dozer_record_version: record.getVersion(),
        };
        const values = record.getValuesList();
        values.forEach((_, index) => {
            result[this.fields[index].getName()] = convertValue(this.fields[index].getTyp(), values[index]);
        });
        return result as DozerRecord<T>;
    }
}