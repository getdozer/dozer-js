import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dozer.types";
/** Event types that user can subscribe. */
export declare enum EventType {
    /** ALL - All events. */
    ALL = 0,
    /** INSERT_ONLY - Only INSERT events. */
    INSERT_ONLY = 1,
    /** UPDATE_ONLY - Only UPDATE events. */
    UPDATE_ONLY = 2,
    /** DELETE_ONLY - Only DELETE events. */
    DELETE_ONLY = 3,
    UNRECOGNIZED = -1
}
export declare function eventTypeFromJSON(object: any): EventType;
export declare function eventTypeToJSON(object: EventType): string;
/** The event types. */
export declare enum OperationType {
    /** INSERT - INSERT operation. */
    INSERT = 0,
    /** DELETE - DELETE operation. */
    DELETE = 1,
    /** UPDATE - UPDATE operation. */
    UPDATE = 2,
    UNRECOGNIZED = -1
}
export declare function operationTypeFromJSON(object: any): OperationType;
export declare function operationTypeToJSON(object: OperationType): string;
/** Supported data types in Dozer. */
export declare enum Type {
    /** UInt - Unsigned 64 bit integer. */
    UInt = 0,
    /** Int - Signed 64 bit integer. */
    Int = 1,
    /** Float - 64 bit floating point number. */
    Float = 2,
    /** Boolean - Boolean. */
    Boolean = 3,
    /** String - UTF-8 string. */
    String = 4,
    /** Text - UTF-8 string. */
    Text = 5,
    /** Binary - Binary data. */
    Binary = 6,
    /** Decimal - Decimal number. */
    Decimal = 7,
    /** Timestamp - ISO 8601 combined date and time with time zone. */
    Timestamp = 8,
    /** Date - ISO 8601 calendar date without timezone. */
    Date = 9,
    /** Bson - BSON data. */
    Bson = 10,
    /** Point - Geo Point type. */
    Point = 11,
    UNRECOGNIZED = -1
}
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
/** A Dozer event. */
export interface Operation {
    /** The operation type. */
    typ: OperationType;
    /** Old record data, only applicable for UPDATE type. */
    old?: Record | undefined;
    /** New record data. */
    new: Record | undefined;
    /** New record id, only applicable for INSERT type. */
    newId?: number | undefined;
    /** Name of the endpoint that this event is from. */
    endpointName: string;
}
/** A record, can be thought of a row in the database table. */
export interface Record {
    /** The list of field values. */
    values: Value[];
    /** Records with same primary key will have increasing version. */
    version: number;
}
/** A record with its id in cache. */
export interface RecordWithId {
    /** The record id. */
    id: number;
    /** The record data. */
    record: Record | undefined;
}
export interface SchemaEvent {
    endpoint: string;
    version: number;
    primaryIndex: number[];
    fields: FieldDefinition[];
}
/** `FieldDefinition` defines a field in a schema. */
export interface FieldDefinition {
    /** The field type. */
    typ: Type;
    /** The field name. */
    name: string;
    /** Whether the field is nullable. */
    nullable: boolean;
}
export interface PointType {
    x: number;
    y: number;
}
/** rust-decimal as a message */
export interface RustDecimal {
    /** the sign of the Decimal value, 0 meaning positive and 1 meaning negative */
    flags: number;
    /**
     * the lo, mid, hi, and flags fields contain the representation of the Decimal
     * value as a 96-bit integer
     */
    lo: number;
    mid: number;
    hi: number;
}
/** A field value. */
export interface Value {
    /** Unsigned 64 bit integer. */
    uintValue?: number | undefined;
    /** Signed 64 bit integer. */
    intValue?: number | undefined;
    /** 32 bit floating point number. */
    floatValue?: number | undefined;
    /** Boolean. */
    boolValue?: boolean | undefined;
    /** UTF-8 string. */
    stringValue?: string | undefined;
    /** Binary data. */
    bytesValue?: Uint8Array | undefined;
    /** Decimal value. */
    decimalValue?: RustDecimal | undefined;
    /** DateTime & Timestamp. */
    timestampValue?: Date | undefined;
    /** ISO 8601 calendar date without timezone. */
    dateValue?: string | undefined;
    /** Point type. */
    pointValue?: PointType | undefined;
}
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    create<I extends {
        typ?: OperationType | undefined;
        old?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
        new?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
        newId?: number | undefined;
        endpointName?: string | undefined;
    } & {
        typ?: OperationType | undefined;
        old?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K in Exclude<keyof I["old"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_1 in Exclude<keyof I["old"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["old"]["values"][number], keyof Value>]: never; })[] & { [K_3 in Exclude<keyof I["old"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_4 in Exclude<keyof I["old"], keyof Record>]: never; }) | undefined;
        new?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K_5 in Exclude<keyof I["new"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_6 in Exclude<keyof I["new"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["new"]["values"][number], keyof Value>]: never; })[] & { [K_8 in Exclude<keyof I["new"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_9 in Exclude<keyof I["new"], keyof Record>]: never; }) | undefined;
        newId?: number | undefined;
        endpointName?: string | undefined;
    } & { [K_10 in Exclude<keyof I, keyof Operation>]: never; }>(base?: I | undefined): Operation;
    fromPartial<I_1 extends {
        typ?: OperationType | undefined;
        old?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
        new?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
        newId?: number | undefined;
        endpointName?: string | undefined;
    } & {
        typ?: OperationType | undefined;
        old?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K_11 in Exclude<keyof I_1["old"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_12 in Exclude<keyof I_1["old"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["old"]["values"][number], keyof Value>]: never; })[] & { [K_14 in Exclude<keyof I_1["old"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_15 in Exclude<keyof I_1["old"], keyof Record>]: never; }) | undefined;
        new?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K_16 in Exclude<keyof I_1["new"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_17 in Exclude<keyof I_1["new"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I_1["new"]["values"][number], keyof Value>]: never; })[] & { [K_19 in Exclude<keyof I_1["new"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_20 in Exclude<keyof I_1["new"], keyof Record>]: never; }) | undefined;
        newId?: number | undefined;
        endpointName?: string | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof Operation>]: never; }>(object: I_1): Operation;
};
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    create<I extends {
        values?: {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[] | undefined;
        version?: number | undefined;
    } & {
        values?: ({
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[] & ({
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        } & {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: ({
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } & {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } & { [K in Exclude<keyof I["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: ({
                x?: number | undefined;
                y?: number | undefined;
            } & {
                x?: number | undefined;
                y?: number | undefined;
            } & { [K_1 in Exclude<keyof I["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["values"][number], keyof Value>]: never; })[] & { [K_3 in Exclude<keyof I["values"], keyof {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        version?: number | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Record>]: never; }>(base?: I | undefined): Record;
    fromPartial<I_1 extends {
        values?: {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[] | undefined;
        version?: number | undefined;
    } & {
        values?: ({
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[] & ({
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        } & {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: ({
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } & {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } & { [K_5 in Exclude<keyof I_1["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: ({
                x?: number | undefined;
                y?: number | undefined;
            } & {
                x?: number | undefined;
                y?: number | undefined;
            } & { [K_6 in Exclude<keyof I_1["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["values"][number], keyof Value>]: never; })[] & { [K_8 in Exclude<keyof I_1["values"], keyof {
            uintValue?: number | undefined;
            intValue?: number | undefined;
            floatValue?: number | undefined;
            boolValue?: boolean | undefined;
            stringValue?: string | undefined;
            bytesValue?: Uint8Array | undefined;
            decimalValue?: {
                flags?: number | undefined;
                lo?: number | undefined;
                mid?: number | undefined;
                hi?: number | undefined;
            } | undefined;
            timestampValue?: Date | undefined;
            dateValue?: string | undefined;
            pointValue?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        version?: number | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Record>]: never; }>(object: I_1): Record;
};
export declare const RecordWithId: {
    encode(message: RecordWithId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordWithId;
    fromJSON(object: any): RecordWithId;
    toJSON(message: RecordWithId): unknown;
    create<I extends {
        id?: number | undefined;
        record?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
    } & {
        id?: number | undefined;
        record?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K in Exclude<keyof I["record"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_1 in Exclude<keyof I["record"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["record"]["values"][number], keyof Value>]: never; })[] & { [K_3 in Exclude<keyof I["record"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_4 in Exclude<keyof I["record"], keyof Record>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof RecordWithId>]: never; }>(base?: I | undefined): RecordWithId;
    fromPartial<I_1 extends {
        id?: number | undefined;
        record?: {
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } | undefined;
    } & {
        id?: number | undefined;
        record?: ({
            values?: {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] | undefined;
            version?: number | undefined;
        } & {
            values?: ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[] & ({
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } & {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: ({
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } & { [K_6 in Exclude<keyof I_1["record"]["values"][number]["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_7 in Exclude<keyof I_1["record"]["values"][number]["pointValue"], keyof PointType>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["record"]["values"][number], keyof Value>]: never; })[] & { [K_9 in Exclude<keyof I_1["record"]["values"], keyof {
                uintValue?: number | undefined;
                intValue?: number | undefined;
                floatValue?: number | undefined;
                boolValue?: boolean | undefined;
                stringValue?: string | undefined;
                bytesValue?: Uint8Array | undefined;
                decimalValue?: {
                    flags?: number | undefined;
                    lo?: number | undefined;
                    mid?: number | undefined;
                    hi?: number | undefined;
                } | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            version?: number | undefined;
        } & { [K_10 in Exclude<keyof I_1["record"], keyof Record>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof RecordWithId>]: never; }>(object: I_1): RecordWithId;
};
export declare const SchemaEvent: {
    encode(message: SchemaEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaEvent;
    fromJSON(object: any): SchemaEvent;
    toJSON(message: SchemaEvent): unknown;
    create<I extends {
        endpoint?: string | undefined;
        version?: number | undefined;
        primaryIndex?: number[] | undefined;
        fields?: {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
    } & {
        endpoint?: string | undefined;
        version?: number | undefined;
        primaryIndex?: (number[] & number[] & { [K in Exclude<keyof I["primaryIndex"], keyof number[]>]: never; }) | undefined;
        fields?: ({
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_2 in Exclude<keyof I["fields"], keyof {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SchemaEvent>]: never; }>(base?: I | undefined): SchemaEvent;
    fromPartial<I_1 extends {
        endpoint?: string | undefined;
        version?: number | undefined;
        primaryIndex?: number[] | undefined;
        fields?: {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
    } & {
        endpoint?: string | undefined;
        version?: number | undefined;
        primaryIndex?: (number[] & number[] & { [K_4 in Exclude<keyof I_1["primaryIndex"], keyof number[]>]: never; }) | undefined;
        fields?: ({
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_6 in Exclude<keyof I_1["fields"], keyof {
            typ?: Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SchemaEvent>]: never; }>(object: I_1): SchemaEvent;
};
export declare const FieldDefinition: {
    encode(message: FieldDefinition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldDefinition;
    fromJSON(object: any): FieldDefinition;
    toJSON(message: FieldDefinition): unknown;
    create<I extends {
        typ?: Type | undefined;
        name?: string | undefined;
        nullable?: boolean | undefined;
    } & {
        typ?: Type | undefined;
        name?: string | undefined;
        nullable?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof FieldDefinition>]: never; }>(base?: I | undefined): FieldDefinition;
    fromPartial<I_1 extends {
        typ?: Type | undefined;
        name?: string | undefined;
        nullable?: boolean | undefined;
    } & {
        typ?: Type | undefined;
        name?: string | undefined;
        nullable?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FieldDefinition>]: never; }>(object: I_1): FieldDefinition;
};
export declare const PointType: {
    encode(message: PointType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PointType;
    fromJSON(object: any): PointType;
    toJSON(message: PointType): unknown;
    create<I extends {
        x?: number | undefined;
        y?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
    } & { [K in Exclude<keyof I, keyof PointType>]: never; }>(base?: I | undefined): PointType;
    fromPartial<I_1 extends {
        x?: number | undefined;
        y?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PointType>]: never; }>(object: I_1): PointType;
};
export declare const RustDecimal: {
    encode(message: RustDecimal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RustDecimal;
    fromJSON(object: any): RustDecimal;
    toJSON(message: RustDecimal): unknown;
    create<I extends {
        flags?: number | undefined;
        lo?: number | undefined;
        mid?: number | undefined;
        hi?: number | undefined;
    } & {
        flags?: number | undefined;
        lo?: number | undefined;
        mid?: number | undefined;
        hi?: number | undefined;
    } & { [K in Exclude<keyof I, keyof RustDecimal>]: never; }>(base?: I | undefined): RustDecimal;
    fromPartial<I_1 extends {
        flags?: number | undefined;
        lo?: number | undefined;
        mid?: number | undefined;
        hi?: number | undefined;
    } & {
        flags?: number | undefined;
        lo?: number | undefined;
        mid?: number | undefined;
        hi?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RustDecimal>]: never; }>(object: I_1): RustDecimal;
};
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    create<I extends {
        uintValue?: number | undefined;
        intValue?: number | undefined;
        floatValue?: number | undefined;
        boolValue?: boolean | undefined;
        stringValue?: string | undefined;
        bytesValue?: Uint8Array | undefined;
        decimalValue?: {
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } | undefined;
        timestampValue?: Date | undefined;
        dateValue?: string | undefined;
        pointValue?: {
            x?: number | undefined;
            y?: number | undefined;
        } | undefined;
    } & {
        uintValue?: number | undefined;
        intValue?: number | undefined;
        floatValue?: number | undefined;
        boolValue?: boolean | undefined;
        stringValue?: string | undefined;
        bytesValue?: Uint8Array | undefined;
        decimalValue?: ({
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } & {
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } & { [K in Exclude<keyof I["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
        timestampValue?: Date | undefined;
        dateValue?: string | undefined;
        pointValue?: ({
            x?: number | undefined;
            y?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
        } & { [K_1 in Exclude<keyof I["pointValue"], keyof PointType>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Value>]: never; }>(base?: I | undefined): Value;
    fromPartial<I_1 extends {
        uintValue?: number | undefined;
        intValue?: number | undefined;
        floatValue?: number | undefined;
        boolValue?: boolean | undefined;
        stringValue?: string | undefined;
        bytesValue?: Uint8Array | undefined;
        decimalValue?: {
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } | undefined;
        timestampValue?: Date | undefined;
        dateValue?: string | undefined;
        pointValue?: {
            x?: number | undefined;
            y?: number | undefined;
        } | undefined;
    } & {
        uintValue?: number | undefined;
        intValue?: number | undefined;
        floatValue?: number | undefined;
        boolValue?: boolean | undefined;
        stringValue?: string | undefined;
        bytesValue?: Uint8Array | undefined;
        decimalValue?: ({
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } & {
            flags?: number | undefined;
            lo?: number | undefined;
            mid?: number | undefined;
            hi?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["decimalValue"], keyof RustDecimal>]: never; }) | undefined;
        timestampValue?: Date | undefined;
        dateValue?: string | undefined;
        pointValue?: ({
            x?: number | undefined;
            y?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["pointValue"], keyof PointType>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Value>]: never; }>(object: I_1): Value;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
