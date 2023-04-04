/**
 * @fileoverview gRPC-Web generated client stub for dozer.auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_auth_pb from '../protos/auth_pb';


export class AuthGrpcServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorgetAuthToken = new grpcWeb.MethodDescriptor(
    '/dozer.auth.AuthGrpcService/getAuthToken',
    grpcWeb.MethodType.UNARY,
    protos_auth_pb.GetAuthTokenRequest,
    protos_auth_pb.GetAuthTokenResponse,
    (request: protos_auth_pb.GetAuthTokenRequest) => {
      return request.serializeBinary();
    },
    protos_auth_pb.GetAuthTokenResponse.deserializeBinary
  );

  getAuthToken(
    request: protos_auth_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_auth_pb.GetAuthTokenResponse>;

  getAuthToken(
    request: protos_auth_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_auth_pb.GetAuthTokenResponse) => void): grpcWeb.ClientReadableStream<protos_auth_pb.GetAuthTokenResponse>;

  getAuthToken(
    request: protos_auth_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_auth_pb.GetAuthTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dozer.auth.AuthGrpcService/getAuthToken',
        request,
        metadata || {},
        this.methodDescriptorgetAuthToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dozer.auth.AuthGrpcService/getAuthToken',
    request,
    metadata || {},
    this.methodDescriptorgetAuthToken);
  }

}
