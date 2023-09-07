import * as jspb from 'google-protobuf'

import * as types_pb from './types_pb';


export class IngestRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): IngestRequest;

  getTyp(): types_pb.OperationType;
  setTyp(value: types_pb.OperationType): IngestRequest;

  getOld(): types_pb.Record | undefined;
  setOld(value?: types_pb.Record): IngestRequest;
  hasOld(): boolean;
  clearOld(): IngestRequest;

  getNew(): types_pb.Record | undefined;
  setNew(value?: types_pb.Record): IngestRequest;
  hasNew(): boolean;
  clearNew(): IngestRequest;

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
    old?: types_pb.Record.AsObject,
    pb_new?: types_pb.Record.AsObject,
    seqNo: number,
  }

  export enum OldCase { 
    _OLD_NOT_SET = 0,
    OLD = 3,
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
