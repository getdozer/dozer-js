import * as jspb from 'google-protobuf'

import * as protos_types_pb from '../protos/types_pb';


export class QueryRequest extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): QueryRequest;

  getQuery(): string;
  setQuery(value: string): QueryRequest;
  hasQuery(): boolean;
  clearQuery(): QueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    endpoint: string,
    query?: string,
  }

  export enum QueryCase { 
    _QUERY_NOT_SET = 0,
    QUERY = 2,
  }
}

export class CountResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): CountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountResponse): CountResponse.AsObject;
  static serializeBinaryToWriter(message: CountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountResponse;
  static deserializeBinaryFromReader(message: CountResponse, reader: jspb.BinaryReader): CountResponse;
}

export namespace CountResponse {
  export type AsObject = {
    count: number,
  }
}

export class OnEventRequest extends jspb.Message {
  getType(): protos_types_pb.EventType;
  setType(value: protos_types_pb.EventType): OnEventRequest;

  getEndpoint(): string;
  setEndpoint(value: string): OnEventRequest;

  getFilter(): string;
  setFilter(value: string): OnEventRequest;
  hasFilter(): boolean;
  clearFilter(): OnEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnEventRequest): OnEventRequest.AsObject;
  static serializeBinaryToWriter(message: OnEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnEventRequest;
  static deserializeBinaryFromReader(message: OnEventRequest, reader: jspb.BinaryReader): OnEventRequest;
}

export namespace OnEventRequest {
  export type AsObject = {
    type: protos_types_pb.EventType,
    endpoint: string,
    filter?: string,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 3,
  }
}

export class GetFieldsRequest extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): GetFieldsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldsRequest): GetFieldsRequest.AsObject;
  static serializeBinaryToWriter(message: GetFieldsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldsRequest;
  static deserializeBinaryFromReader(message: GetFieldsRequest, reader: jspb.BinaryReader): GetFieldsRequest;
}

export namespace GetFieldsRequest {
  export type AsObject = {
    endpoint: string,
  }
}

export class GetFieldsResponse extends jspb.Message {
  getPrimaryIndexList(): Array<number>;
  setPrimaryIndexList(value: Array<number>): GetFieldsResponse;
  clearPrimaryIndexList(): GetFieldsResponse;
  addPrimaryIndex(value: number, index?: number): GetFieldsResponse;

  getFieldsList(): Array<protos_types_pb.FieldDefinition>;
  setFieldsList(value: Array<protos_types_pb.FieldDefinition>): GetFieldsResponse;
  clearFieldsList(): GetFieldsResponse;
  addFields(value?: protos_types_pb.FieldDefinition, index?: number): protos_types_pb.FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldsResponse): GetFieldsResponse.AsObject;
  static serializeBinaryToWriter(message: GetFieldsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldsResponse;
  static deserializeBinaryFromReader(message: GetFieldsResponse, reader: jspb.BinaryReader): GetFieldsResponse;
}

export namespace GetFieldsResponse {
  export type AsObject = {
    primaryIndexList: Array<number>,
    fieldsList: Array<protos_types_pb.FieldDefinition.AsObject>,
  }
}

export class QueryResponse extends jspb.Message {
  getFieldsList(): Array<protos_types_pb.FieldDefinition>;
  setFieldsList(value: Array<protos_types_pb.FieldDefinition>): QueryResponse;
  clearFieldsList(): QueryResponse;
  addFields(value?: protos_types_pb.FieldDefinition, index?: number): protos_types_pb.FieldDefinition;

  getRecordsList(): Array<protos_types_pb.RecordWithId>;
  setRecordsList(value: Array<protos_types_pb.RecordWithId>): QueryResponse;
  clearRecordsList(): QueryResponse;
  addRecords(value?: protos_types_pb.RecordWithId, index?: number): protos_types_pb.RecordWithId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    fieldsList: Array<protos_types_pb.FieldDefinition.AsObject>,
    recordsList: Array<protos_types_pb.RecordWithId.AsObject>,
  }
}

export class GetEndpointsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointsRequest): GetEndpointsRequest.AsObject;
  static serializeBinaryToWriter(message: GetEndpointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointsRequest;
  static deserializeBinaryFromReader(message: GetEndpointsRequest, reader: jspb.BinaryReader): GetEndpointsRequest;
}

export namespace GetEndpointsRequest {
  export type AsObject = {
  }
}

export class GetEndpointsResponse extends jspb.Message {
  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): GetEndpointsResponse;
  clearEndpointsList(): GetEndpointsResponse;
  addEndpoints(value: string, index?: number): GetEndpointsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointsResponse): GetEndpointsResponse.AsObject;
  static serializeBinaryToWriter(message: GetEndpointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointsResponse;
  static deserializeBinaryFromReader(message: GetEndpointsResponse, reader: jspb.BinaryReader): GetEndpointsResponse;
}

export namespace GetEndpointsResponse {
  export type AsObject = {
    endpointsList: Array<string>,
  }
}

export class GetAuthTokenRequest extends jspb.Message {
  getAccessFilter(): string;
  setAccessFilter(value: string): GetAuthTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthTokenRequest): GetAuthTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetAuthTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthTokenRequest;
  static deserializeBinaryFromReader(message: GetAuthTokenRequest, reader: jspb.BinaryReader): GetAuthTokenRequest;
}

export namespace GetAuthTokenRequest {
  export type AsObject = {
    accessFilter: string,
  }
}

export class GetAuthTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetAuthTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthTokenResponse): GetAuthTokenResponse.AsObject;
  static serializeBinaryToWriter(message: GetAuthTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthTokenResponse;
  static deserializeBinaryFromReader(message: GetAuthTokenResponse, reader: jspb.BinaryReader): GetAuthTokenResponse;
}

export namespace GetAuthTokenResponse {
  export type AsObject = {
    token: string,
  }
}

