// package: dozer.types
// file: types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class EventFilter extends jspb.Message { 
    getType(): EventType;
    setType(value: EventType): EventFilter;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): string | undefined;
    setFilter(value: string): EventFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventFilter.AsObject;
    static toObject(includeInstance: boolean, msg: EventFilter): EventFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventFilter;
    static deserializeBinaryFromReader(message: EventFilter, reader: jspb.BinaryReader): EventFilter;
}

export namespace EventFilter {
    export type AsObject = {
        type: EventType,
        filter?: string,
    }
}

export class Operation extends jspb.Message { 
    getTyp(): OperationType;
    setTyp(value: OperationType): Operation;

    hasOld(): boolean;
    clearOld(): void;
    getOld(): Record | undefined;
    setOld(value?: Record): Operation;

    hasNew(): boolean;
    clearNew(): void;
    getNew(): Record | undefined;
    setNew(value?: Record): Operation;
    getEndpointName(): string;
    setEndpointName(value: string): Operation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operation.AsObject;
    static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operation;
    static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
    export type AsObject = {
        typ: OperationType,
        old?: Record.AsObject,
        pb_new?: Record.AsObject,
        endpointName: string,
    }
}

export class Record extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<Value>;
    setValuesList(value: Array<Value>): Record;
    addValues(value?: Value, index?: number): Value;
    getId(): number;
    setId(value: number): Record;
    getVersion(): number;
    setVersion(value: number): Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
    export type AsObject = {
        valuesList: Array<Value.AsObject>,
        id: number,
        version: number,
    }
}

export class SchemaEvent extends jspb.Message { 
    getEndpoint(): string;
    setEndpoint(value: string): SchemaEvent;
    getVersion(): number;
    setVersion(value: number): SchemaEvent;
    clearPrimaryIndexList(): void;
    getPrimaryIndexList(): Array<number>;
    setPrimaryIndexList(value: Array<number>): SchemaEvent;
    addPrimaryIndex(value: number, index?: number): number;
    clearFieldsList(): void;
    getFieldsList(): Array<FieldDefinition>;
    setFieldsList(value: Array<FieldDefinition>): SchemaEvent;
    addFields(value?: FieldDefinition, index?: number): FieldDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaEvent): SchemaEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaEvent;
    static deserializeBinaryFromReader(message: SchemaEvent, reader: jspb.BinaryReader): SchemaEvent;
}

export namespace SchemaEvent {
    export type AsObject = {
        endpoint: string,
        version: number,
        primaryIndexList: Array<number>,
        fieldsList: Array<FieldDefinition.AsObject>,
    }
}

export class FieldDefinition extends jspb.Message { 
    getTyp(): Type;
    setTyp(value: Type): FieldDefinition;
    getName(): string;
    setName(value: string): FieldDefinition;
    getNullable(): boolean;
    setNullable(value: boolean): FieldDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: FieldDefinition): FieldDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldDefinition;
    static deserializeBinaryFromReader(message: FieldDefinition, reader: jspb.BinaryReader): FieldDefinition;
}

export namespace FieldDefinition {
    export type AsObject = {
        typ: Type,
        name: string,
        nullable: boolean,
    }
}

export class PointType extends jspb.Message { 
    getX(): number;
    setX(value: number): PointType;
    getY(): number;
    setY(value: number): PointType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointType.AsObject;
    static toObject(includeInstance: boolean, msg: PointType): PointType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointType;
    static deserializeBinaryFromReader(message: PointType, reader: jspb.BinaryReader): PointType;
}

export namespace PointType {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class DurationType extends jspb.Message { 
    getValue(): string;
    setValue(value: string): DurationType;
    getTimeUnit(): string;
    setTimeUnit(value: string): DurationType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DurationType.AsObject;
    static toObject(includeInstance: boolean, msg: DurationType): DurationType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DurationType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DurationType;
    static deserializeBinaryFromReader(message: DurationType, reader: jspb.BinaryReader): DurationType;
}

export namespace DurationType {
    export type AsObject = {
        value: string,
        timeUnit: string,
    }
}

export class RustDecimal extends jspb.Message { 
    getScale(): number;
    setScale(value: number): RustDecimal;
    getLo(): number;
    setLo(value: number): RustDecimal;
    getMid(): number;
    setMid(value: number): RustDecimal;
    getHi(): number;
    setHi(value: number): RustDecimal;
    getNegative(): boolean;
    setNegative(value: boolean): RustDecimal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RustDecimal.AsObject;
    static toObject(includeInstance: boolean, msg: RustDecimal): RustDecimal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RustDecimal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RustDecimal;
    static deserializeBinaryFromReader(message: RustDecimal, reader: jspb.BinaryReader): RustDecimal;
}

export namespace RustDecimal {
    export type AsObject = {
        scale: number,
        lo: number,
        mid: number,
        hi: number,
        negative: boolean,
    }
}

export class Value extends jspb.Message { 

    hasUintValue(): boolean;
    clearUintValue(): void;
    getUintValue(): number;
    setUintValue(value: number): Value;

    hasUint128Value(): boolean;
    clearUint128Value(): void;
    getUint128Value(): string;
    setUint128Value(value: string): Value;

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number;
    setIntValue(value: number): Value;

    hasInt128Value(): boolean;
    clearInt128Value(): void;
    getInt128Value(): string;
    setInt128Value(value: string): Value;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): Value;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): Value;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): Value;

    hasBytesValue(): boolean;
    clearBytesValue(): void;
    getBytesValue(): Uint8Array | string;
    getBytesValue_asU8(): Uint8Array;
    getBytesValue_asB64(): string;
    setBytesValue(value: Uint8Array | string): Value;

    hasDecimalValue(): boolean;
    clearDecimalValue(): void;
    getDecimalValue(): RustDecimal | undefined;
    setDecimalValue(value?: RustDecimal): Value;

    hasTimestampValue(): boolean;
    clearTimestampValue(): void;
    getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): Value;

    hasDateValue(): boolean;
    clearDateValue(): void;
    getDateValue(): string;
    setDateValue(value: string): Value;

    hasPointValue(): boolean;
    clearPointValue(): void;
    getPointValue(): PointType | undefined;
    setPointValue(value?: PointType): Value;

    hasDurationValue(): boolean;
    clearDurationValue(): void;
    getDurationValue(): DurationType | undefined;
    setDurationValue(value?: DurationType): Value;

    hasJsonValue(): boolean;
    clearJsonValue(): void;
    getJsonValue(): google_protobuf_struct_pb.Value | undefined;
    setJsonValue(value?: google_protobuf_struct_pb.Value): Value;

    getValueCase(): Value.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        uintValue: number,
        uint128Value: string,
        intValue: number,
        int128Value: string,
        floatValue: number,
        boolValue: boolean,
        stringValue: string,
        bytesValue: Uint8Array | string,
        decimalValue?: RustDecimal.AsObject,
        timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateValue: string,
        pointValue?: PointType.AsObject,
        durationValue?: DurationType.AsObject,
        jsonValue?: google_protobuf_struct_pb.Value.AsObject,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        UINT_VALUE = 1,
        UINT_128_VALUE = 2,
        INT_VALUE = 3,
        INT_128_VALUE = 4,
        FLOAT_VALUE = 5,
        BOOL_VALUE = 6,
        STRING_VALUE = 7,
        BYTES_VALUE = 8,
        DECIMAL_VALUE = 9,
        TIMESTAMP_VALUE = 10,
        DATE_VALUE = 11,
        POINT_VALUE = 12,
        DURATION_VALUE = 13,
        JSON_VALUE = 14,
    }

}

export class SchemasResponse extends jspb.Message { 

    getSchemasMap(): jspb.Map<string, Schema>;
    clearSchemasMap(): void;

    getErrorsMap(): jspb.Map<string, string>;
    clearErrorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SchemasResponse): SchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemasResponse;
    static deserializeBinaryFromReader(message: SchemasResponse, reader: jspb.BinaryReader): SchemasResponse;
}

export namespace SchemasResponse {
    export type AsObject = {

        schemasMap: Array<[string, Schema.AsObject]>,

        errorsMap: Array<[string, string]>,
    }
}

export class Schema extends jspb.Message { 
    clearPrimaryIndexList(): void;
    getPrimaryIndexList(): Array<number>;
    setPrimaryIndexList(value: Array<number>): Schema;
    addPrimaryIndex(value: number, index?: number): number;
    clearFieldsList(): void;
    getFieldsList(): Array<FieldDefinition>;
    setFieldsList(value: Array<FieldDefinition>): Schema;
    addFields(value?: FieldDefinition, index?: number): FieldDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
    export type AsObject = {
        primaryIndexList: Array<number>,
        fieldsList: Array<FieldDefinition.AsObject>,
    }
}

export enum EventType {
    ALL = 0,
    INSERT_ONLY = 1,
    UPDATE_ONLY = 2,
    DELETE_ONLY = 3,
}

export enum OperationType {
    INSERT = 0,
    DELETE = 1,
    UPDATE = 2,
}

export enum Type {
    UINT = 0,
    U128 = 1,
    INT = 2,
    I128 = 3,
    FLOAT = 4,
    BOOLEAN = 5,
    STRING = 6,
    TEXT = 7,
    BINARY = 8,
    DECIMAL = 9,
    TIMESTAMP = 10,
    DATE = 11,
    JSON = 12,
    POINT = 13,
    DURATION = 14,
}
