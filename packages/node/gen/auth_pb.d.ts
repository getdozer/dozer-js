// package: dozer.auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetAuthTokenRequest extends jspb.Message { 
    getAccessFilter(): string;
    setAccessFilter(value: string): GetAuthTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthTokenRequest): GetAuthTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthTokenResponse;
    static deserializeBinaryFromReader(message: GetAuthTokenResponse, reader: jspb.BinaryReader): GetAuthTokenResponse;
}

export namespace GetAuthTokenResponse {
    export type AsObject = {
        token: string,
    }
}
