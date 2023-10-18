import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class EventFilter extends jspb.Message {
  getType(): EventType;
  setType(value: EventType): EventFilter;

  getFilter(): string;
  setFilter(value: string): EventFilter;
  hasFilter(): boolean;
  clearFilter(): EventFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EventFilter): EventFilter.AsObject;
  static serializeBinaryToWriter(message: EventFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFilter;
  static deserializeBinaryFromReader(message: EventFilter, reader: jspb.BinaryReader): EventFilter;
}

export namespace EventFilter {
  export type AsObject = {
    type: EventType,
    filter?: string,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 3,
  }
}

export class Operation extends jspb.Message {
  getTyp(): OperationType;
  setTyp(value: OperationType): Operation;

  getOld(): Record | undefined;
  setOld(value?: Record): Operation;
  hasOld(): boolean;
  clearOld(): Operation;

  getNew(): Record | undefined;
  setNew(value?: Record): Operation;
  hasNew(): boolean;
  clearNew(): Operation;

  getEndpointName(): string;
  setEndpointName(value: string): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
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

  export enum OldCase { 
    _OLD_NOT_SET = 0,
    OLD = 2,
  }
}

export class Record extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): Record;
  clearValuesList(): Record;
  addValues(value?: Value, index?: number): Value;

  getId(): number;
  setId(value: number): Record;

  getVersion(): number;
  setVersion(value: number): Record;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
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

  getPrimaryIndexList(): Array<number>;
  setPrimaryIndexList(value: Array<number>): SchemaEvent;
  clearPrimaryIndexList(): SchemaEvent;
  addPrimaryIndex(value: number, index?: number): SchemaEvent;

  getFieldsList(): Array<FieldDefinition>;
  setFieldsList(value: Array<FieldDefinition>): SchemaEvent;
  clearFieldsList(): SchemaEvent;
  addFields(value?: FieldDefinition, index?: number): FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaEvent): SchemaEvent.AsObject;
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
  getUintValue(): number;
  setUintValue(value: number): Value;

  getUint128Value(): string;
  setUint128Value(value: string): Value;

  getIntValue(): number;
  setIntValue(value: number): Value;

  getInt128Value(): string;
  setInt128Value(value: string): Value;

  getFloatValue(): number;
  setFloatValue(value: number): Value;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): Value;

  getStringValue(): string;
  setStringValue(value: string): Value;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): Value;

  getDecimalValue(): RustDecimal | undefined;
  setDecimalValue(value?: RustDecimal): Value;
  hasDecimalValue(): boolean;
  clearDecimalValue(): Value;

  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): Value;
  hasTimestampValue(): boolean;
  clearTimestampValue(): Value;

  getDateValue(): string;
  setDateValue(value: string): Value;

  getPointValue(): PointType | undefined;
  setPointValue(value?: PointType): Value;
  hasPointValue(): boolean;
  clearPointValue(): Value;

  getDurationValue(): DurationType | undefined;
  setDurationValue(value?: DurationType): Value;
  hasDurationValue(): boolean;
  clearDurationValue(): Value;

  getJsonValue(): google_protobuf_struct_pb.Value | undefined;
  setJsonValue(value?: google_protobuf_struct_pb.Value): Value;
  hasJsonValue(): boolean;
  clearJsonValue(): Value;

  getValueCase(): Value.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
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
  clearSchemasMap(): SchemasResponse;

  getErrorsMap(): jspb.Map<string, string>;
  clearErrorsMap(): SchemasResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SchemasResponse): SchemasResponse.AsObject;
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
  getPrimaryIndexList(): Array<number>;
  setPrimaryIndexList(value: Array<number>): Schema;
  clearPrimaryIndexList(): Schema;
  addPrimaryIndex(value: number, index?: number): Schema;

  getFieldsList(): Array<FieldDefinition>;
  setFieldsList(value: Array<FieldDefinition>): Schema;
  clearFieldsList(): Schema;
  addFields(value?: FieldDefinition, index?: number): FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
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
