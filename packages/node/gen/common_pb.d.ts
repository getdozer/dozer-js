// package: dozer.common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as types_pb from "./types_pb";

export class QueryRequest extends jspb.Message { 
    getEndpoint(): string;
    setEndpoint(value: string): QueryRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): string | undefined;
    setQuery(value: string): QueryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRequest;
    static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
    export type AsObject = {
        endpoint: string,
        query?: string,
    }
}

export class CountResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): CountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountResponse): CountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    getEndpointsMap(): jspb.Map<string, types_pb.EventFilter>;
    clearEndpointsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OnEventRequest): OnEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnEventRequest;
    static deserializeBinaryFromReader(message: OnEventRequest, reader: jspb.BinaryReader): OnEventRequest;
}

export namespace OnEventRequest {
    export type AsObject = {

        endpointsMap: Array<[string, types_pb.EventFilter.AsObject]>,
    }
}

export class GetFieldsRequest extends jspb.Message { 
    getEndpoint(): string;
    setEndpoint(value: string): GetFieldsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFieldsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFieldsRequest): GetFieldsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearPrimaryIndexList(): void;
    getPrimaryIndexList(): Array<number>;
    setPrimaryIndexList(value: Array<number>): GetFieldsResponse;
    addPrimaryIndex(value: number, index?: number): number;
    clearFieldsList(): void;
    getFieldsList(): Array<types_pb.FieldDefinition>;
    setFieldsList(value: Array<types_pb.FieldDefinition>): GetFieldsResponse;
    addFields(value?: types_pb.FieldDefinition, index?: number): types_pb.FieldDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFieldsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFieldsResponse): GetFieldsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFieldsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFieldsResponse;
    static deserializeBinaryFromReader(message: GetFieldsResponse, reader: jspb.BinaryReader): GetFieldsResponse;
}

export namespace GetFieldsResponse {
    export type AsObject = {
        primaryIndexList: Array<number>,
        fieldsList: Array<types_pb.FieldDefinition.AsObject>,
    }
}

export class QueryResponse extends jspb.Message { 
    clearFieldsList(): void;
    getFieldsList(): Array<types_pb.FieldDefinition>;
    setFieldsList(value: Array<types_pb.FieldDefinition>): QueryResponse;
    addFields(value?: types_pb.FieldDefinition, index?: number): types_pb.FieldDefinition;
    clearRecordsList(): void;
    getRecordsList(): Array<types_pb.Record>;
    setRecordsList(value: Array<types_pb.Record>): QueryResponse;
    addRecords(value?: types_pb.Record, index?: number): types_pb.Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResponse;
    static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
    export type AsObject = {
        fieldsList: Array<types_pb.FieldDefinition.AsObject>,
        recordsList: Array<types_pb.Record.AsObject>,
    }
}

export class GetEndpointsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEndpointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEndpointsRequest): GetEndpointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEndpointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEndpointsRequest;
    static deserializeBinaryFromReader(message: GetEndpointsRequest, reader: jspb.BinaryReader): GetEndpointsRequest;
}

export namespace GetEndpointsRequest {
    export type AsObject = {
    }
}

export class GetEndpointsResponse extends jspb.Message { 
    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): GetEndpointsResponse;
    addEndpoints(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEndpointsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEndpointsResponse): GetEndpointsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEndpointsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEndpointsResponse;
    static deserializeBinaryFromReader(message: GetEndpointsResponse, reader: jspb.BinaryReader): GetEndpointsResponse;
}

export namespace GetEndpointsResponse {
    export type AsObject = {
        endpointsList: Array<string>,
    }
}
