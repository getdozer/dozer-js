import { FieldDefinition, Value } from "./generated/protos/types_pb";
export declare class RecordMapper {
    private fields;
    constructor(fields: FieldDefinition[]);
    mapRecord(values: Value[]): Object;
}
