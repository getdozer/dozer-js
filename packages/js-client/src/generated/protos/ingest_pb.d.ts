import * as jspb from 'google-protobuf'

import * as types_pb from './types_pb';


export class IngestRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): IngestRequest;

  getTyp(): types_pb.OperationType;
  setTyp(value: types_pb.OperationType): IngestRequest;

  getOldList(): Array<types_pb.Value>;
  setOldList(value: Array<types_pb.Value>): IngestRequest;
  clearOldList(): IngestRequest;
  addOld(value?: types_pb.Value, index?: number): types_pb.Value;

  getNewList(): Array<types_pb.Value>;
  setNewList(value: Array<types_pb.Value>): IngestRequest;
  clearNewList(): IngestRequest;
  addNew(value?: types_pb.Value, index?: number): types_pb.Value;

  getSeqNo(): number;
  setSeqNo(value: number): IngestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IngestRequest): IngestRequest.AsObject;
  static serializeBinaryToWriter(message: IngestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngestRequest;
  static deserializeBinaryFromReader(message: IngestRequest, reader: jspb.BinaryReader): IngestRequest;
}

export namespace IngestRequest {
  export type AsObject = {
    schemaName: string,
    typ: types_pb.OperationType,
    oldList: Array<types_pb.Value.AsObject>,
    newList: Array<types_pb.Value.AsObject>,
    seqNo: number,
  }
}

export class IngestResponse extends jspb.Message {
  getSeqNo(): number;
  setSeqNo(value: number): IngestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IngestResponse): IngestResponse.AsObject;
  static serializeBinaryToWriter(message: IngestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngestResponse;
  static deserializeBinaryFromReader(message: IngestResponse, reader: jspb.BinaryReader): IngestResponse;
}

export namespace IngestResponse {
  export type AsObject = {
    seqNo: number,
  }
}

export class IngestArrowRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): IngestArrowRequest;

  getRecords(): Uint8Array | string;
  getRecords_asU8(): Uint8Array;
  getRecords_asB64(): string;
  setRecords(value: Uint8Array | string): IngestArrowRequest;

  getSeqNo(): number;
  setSeqNo(value: number): IngestArrowRequest;

  getMetadataMap(): jspb.Map<number, IngestMetadata>;
  clearMetadataMap(): IngestArrowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngestArrowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IngestArrowRequest): IngestArrowRequest.AsObject;
  static serializeBinaryToWriter(message: IngestArrowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngestArrowRequest;
  static deserializeBinaryFromReader(message: IngestArrowRequest, reader: jspb.BinaryReader): IngestArrowRequest;
}

export namespace IngestArrowRequest {
  export type AsObject = {
    schemaName: string,
    records: Uint8Array | string,
    seqNo: number,
    metadataMap: Array<[number, IngestMetadata.AsObject]>,
  }
}

export class IngestMetadata extends jspb.Message {
  getTyp(): OperationType;
  setTyp(value: OperationType): IngestMetadata;

  getVersion(): number;
  setVersion(value: number): IngestMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IngestMetadata): IngestMetadata.AsObject;
  static serializeBinaryToWriter(message: IngestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngestMetadata;
  static deserializeBinaryFromReader(message: IngestMetadata, reader: jspb.BinaryReader): IngestMetadata;
}

export namespace IngestMetadata {
  export type AsObject = {
    typ: OperationType,
    version: number,
  }
}

export enum OperationType { 
  INSERT = 0,
  DELETE = 1,
  UPDATE = 2,
}
