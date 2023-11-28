// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// The _common_ gRPC API handles Pull and Push queries of all endpoints with a single service, `AuthGrpcService`.
'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_dozer_auth_GetAuthTokenRequest(arg) {
  if (!(arg instanceof auth_pb.GetAuthTokenRequest)) {
    throw new Error('Expected argument of type dozer.auth.GetAuthTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_auth_GetAuthTokenRequest(buffer_arg) {
  return auth_pb.GetAuthTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_auth_GetAuthTokenResponse(arg) {
  if (!(arg instanceof auth_pb.GetAuthTokenResponse)) {
    throw new Error('Expected argument of type dozer.auth.GetAuthTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_auth_GetAuthTokenResponse(buffer_arg) {
  return auth_pb.GetAuthTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// AuthGrpcService allows developers to generate JWT token for restricted access to data.
var AuthGrpcServiceService = exports.AuthGrpcServiceService = {
  // Creates auth token with custom access
getAuthToken: {
    path: '/dozer.auth.AuthGrpcService/getAuthToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetAuthTokenRequest,
    responseType: auth_pb.GetAuthTokenResponse,
    requestSerialize: serialize_dozer_auth_GetAuthTokenRequest,
    requestDeserialize: deserialize_dozer_auth_GetAuthTokenRequest,
    responseSerialize: serialize_dozer_auth_GetAuthTokenResponse,
    responseDeserialize: deserialize_dozer_auth_GetAuthTokenResponse,
  },
};

exports.AuthGrpcServiceClient = grpc.makeGenericClientConstructor(AuthGrpcServiceService);
