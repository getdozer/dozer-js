// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// The _common_ gRPC API handles Pull and Push queries of all endpoints with a single service, `CommonGrpcService`.
'use strict';
var grpc = require('@grpc/grpc-js');
var common_pb = require('./common_pb.js');
var types_pb = require('./types_pb.js');

function serialize_dozer_common_CountResponse(arg) {
  if (!(arg instanceof common_pb.CountResponse)) {
    throw new Error('Expected argument of type dozer.common.CountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_CountResponse(buffer_arg) {
  return common_pb.CountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_GetEndpointsRequest(arg) {
  if (!(arg instanceof common_pb.GetEndpointsRequest)) {
    throw new Error('Expected argument of type dozer.common.GetEndpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_GetEndpointsRequest(buffer_arg) {
  return common_pb.GetEndpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_GetEndpointsResponse(arg) {
  if (!(arg instanceof common_pb.GetEndpointsResponse)) {
    throw new Error('Expected argument of type dozer.common.GetEndpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_GetEndpointsResponse(buffer_arg) {
  return common_pb.GetEndpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_GetFieldsRequest(arg) {
  if (!(arg instanceof common_pb.GetFieldsRequest)) {
    throw new Error('Expected argument of type dozer.common.GetFieldsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_GetFieldsRequest(buffer_arg) {
  return common_pb.GetFieldsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_GetFieldsResponse(arg) {
  if (!(arg instanceof common_pb.GetFieldsResponse)) {
    throw new Error('Expected argument of type dozer.common.GetFieldsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_GetFieldsResponse(buffer_arg) {
  return common_pb.GetFieldsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_OnEventRequest(arg) {
  if (!(arg instanceof common_pb.OnEventRequest)) {
    throw new Error('Expected argument of type dozer.common.OnEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_OnEventRequest(buffer_arg) {
  return common_pb.OnEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_QueryRequest(arg) {
  if (!(arg instanceof common_pb.QueryRequest)) {
    throw new Error('Expected argument of type dozer.common.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_QueryRequest(buffer_arg) {
  return common_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_common_QueryResponse(arg) {
  if (!(arg instanceof common_pb.QueryResponse)) {
    throw new Error('Expected argument of type dozer.common.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_common_QueryResponse(buffer_arg) {
  return common_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_types_Operation(arg) {
  if (!(arg instanceof types_pb.Operation)) {
    throw new Error('Expected argument of type dozer.types.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_types_Operation(buffer_arg) {
  return types_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// CommonGrpcService allows developers to query data from various endpoints.
//
// The service supports both Pull and Push queries. It provides methods to return metadata about the fields that can be used to construct the data types dynamically.
//
// This is preferred while working with libraries or in the case of dynamic scenarios and interpreted languages.
var CommonGrpcServiceService = exports.CommonGrpcServiceService = {
  // *
// Counts the number of records satisfying the given query. See [Query](../query) for the query format.
//
// If no query is specified, total number of records will be returned.
count: {
    path: '/dozer.common.CommonGrpcService/count',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.QueryRequest,
    responseType: common_pb.CountResponse,
    requestSerialize: serialize_dozer_common_QueryRequest,
    requestDeserialize: deserialize_dozer_common_QueryRequest,
    responseSerialize: serialize_dozer_common_CountResponse,
    responseDeserialize: deserialize_dozer_common_CountResponse,
  },
  // *
// Performs query on an endpoint. See [Query](../query) for the query format.
//
// If no query is specified, the first 50 records will be returned.
query: {
    path: '/dozer.common.CommonGrpcService/query',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.QueryRequest,
    responseType: common_pb.QueryResponse,
    requestSerialize: serialize_dozer_common_QueryRequest,
    requestDeserialize: deserialize_dozer_common_QueryRequest,
    responseSerialize: serialize_dozer_common_QueryResponse,
    responseDeserialize: deserialize_dozer_common_QueryResponse,
  },
  // *
// Subscribes to the Dozer event stream, optionally applies a filter. See [Query](../query) for the filter format.
//
// This API is unstable and may change in the future.
onEvent: {
    path: '/dozer.common.CommonGrpcService/OnEvent',
    requestStream: false,
    responseStream: true,
    requestType: common_pb.OnEventRequest,
    responseType: types_pb.Operation,
    requestSerialize: serialize_dozer_common_OnEventRequest,
    requestDeserialize: deserialize_dozer_common_OnEventRequest,
    responseSerialize: serialize_dozer_types_Operation,
    responseDeserialize: deserialize_dozer_types_Operation,
  },
  // Gets all the endpoints Dozer is currently serving.
getEndpoints: {
    path: '/dozer.common.CommonGrpcService/getEndpoints',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetEndpointsRequest,
    responseType: common_pb.GetEndpointsResponse,
    requestSerialize: serialize_dozer_common_GetEndpointsRequest,
    requestDeserialize: deserialize_dozer_common_GetEndpointsRequest,
    responseSerialize: serialize_dozer_common_GetEndpointsResponse,
    responseDeserialize: deserialize_dozer_common_GetEndpointsResponse,
  },
  // Gets the field description of an endpoint.
getFields: {
    path: '/dozer.common.CommonGrpcService/getFields',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetFieldsRequest,
    responseType: common_pb.GetFieldsResponse,
    requestSerialize: serialize_dozer_common_GetFieldsRequest,
    requestDeserialize: deserialize_dozer_common_GetFieldsRequest,
    responseSerialize: serialize_dozer_common_GetFieldsResponse,
    responseDeserialize: deserialize_dozer_common_GetFieldsResponse,
  },
};

exports.CommonGrpcServiceClient = grpc.makeGenericClientConstructor(CommonGrpcServiceService);
