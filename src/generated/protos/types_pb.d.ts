import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


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

  getNewId(): number;
  setNewId(value: number): Operation;
  hasNewId(): boolean;
  clearNewId(): Operation;

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
    newId?: number,
    endpointName: string,
  }

  export enum OldCase { 
    _OLD_NOT_SET = 0,
    OLD = 2,
  }

  export enum NewIdCase { 
    _NEW_ID_NOT_SET = 0,
    NEW_ID = 4,
  }
}

export class Record extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): Record;
  clearValuesList(): Record;
  addValues(value?: Value, index?: number): Value;

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
    version: number,
  }
}

export class RecordWithId extends jspb.Message {
  getId(): number;
  setId(value: number): RecordWithId;

  getRecord(): Record | undefined;
  setRecord(value?: Record): RecordWithId;
  hasRecord(): boolean;
  clearRecord(): RecordWithId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordWithId.AsObject;
  static toObject(includeInstance: boolean, msg: RecordWithId): RecordWithId.AsObject;
  static serializeBinaryToWriter(message: RecordWithId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordWithId;
  static deserializeBinaryFromReader(message: RecordWithId, reader: jspb.BinaryReader): RecordWithId;
}

export namespace RecordWithId {
  export type AsObject = {
    id: number,
    record?: Record.AsObject,
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

export class RustDecimal extends jspb.Message {
  getFlags(): number;
  setFlags(value: number): RustDecimal;

  getLo(): number;
  setLo(value: number): RustDecimal;

  getMid(): number;
  setMid(value: number): RustDecimal;

  getHi(): number;
  setHi(value: number): RustDecimal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RustDecimal.AsObject;
  static toObject(includeInstance: boolean, msg: RustDecimal): RustDecimal.AsObject;
  static serializeBinaryToWriter(message: RustDecimal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RustDecimal;
  static deserializeBinaryFromReader(message: RustDecimal, reader: jspb.BinaryReader): RustDecimal;
}

export namespace RustDecimal {
  export type AsObject = {
    flags: number,
    lo: number,
    mid: number,
    hi: number,
  }
}

export class Value extends jspb.Message {
  getUintValue(): number;
  setUintValue(value: number): Value;

  getIntValue(): number;
  setIntValue(value: number): Value;

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
    intValue: number,
    floatValue: number,
    boolValue: boolean,
    stringValue: string,
    bytesValue: Uint8Array | string,
    decimalValue?: RustDecimal.AsObject,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateValue: string,
    pointValue?: PointType.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    UINT_VALUE = 1,
    INT_VALUE = 2,
    FLOAT_VALUE = 3,
    BOOL_VALUE = 4,
    STRING_VALUE = 5,
    BYTES_VALUE = 7,
    DECIMAL_VALUE = 8,
    TIMESTAMP_VALUE = 9,
    DATE_VALUE = 10,
    POINT_VALUE = 11,
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
  INT = 1,
  FLOAT = 2,
  BOOLEAN = 3,
  STRING = 4,
  TEXT = 5,
  BINARY = 6,
  DECIMAL = 7,
  TIMESTAMP = 8,
  DATE = 9,
  BSON = 10,
  POINT = 11,
}
