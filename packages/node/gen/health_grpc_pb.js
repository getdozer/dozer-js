// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// The _health_ gRPC API checks health of all services, `HealthGrpcService`.
'use strict';
var grpc = require('@grpc/grpc-js');
var health_pb = require('./health_pb.js');

function serialize_dozer_health_HealthCheckRequest(arg) {
  if (!(arg instanceof health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type dozer.health.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_health_HealthCheckRequest(buffer_arg) {
  return health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_health_HealthCheckResponse(arg) {
  if (!(arg instanceof health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type dozer.health.HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_health_HealthCheckResponse(buffer_arg) {
  return health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// The health service that checks health on services.
var HealthGrpcServiceService = exports.HealthGrpcServiceService = {
  // Get function for health check
healthCheck: {
    path: '/dozer.health.HealthGrpcService/healthCheck',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.HealthCheckRequest,
    responseType: health_pb.HealthCheckResponse,
    requestSerialize: serialize_dozer_health_HealthCheckRequest,
    requestDeserialize: deserialize_dozer_health_HealthCheckRequest,
    responseSerialize: serialize_dozer_health_HealthCheckResponse,
    responseDeserialize: deserialize_dozer_health_HealthCheckResponse,
  },
  // Get function for health check watch
healthWatch: {
    path: '/dozer.health.HealthGrpcService/healthWatch',
    requestStream: false,
    responseStream: true,
    requestType: health_pb.HealthCheckRequest,
    responseType: health_pb.HealthCheckResponse,
    requestSerialize: serialize_dozer_health_HealthCheckRequest,
    requestDeserialize: deserialize_dozer_health_HealthCheckRequest,
    responseSerialize: serialize_dozer_health_HealthCheckResponse,
    responseDeserialize: deserialize_dozer_health_HealthCheckResponse,
  },
};

exports.HealthGrpcServiceClient = grpc.makeGenericClientConstructor(HealthGrpcServiceService);
// *
// Get functions for health check
//
// [Reference] https://github.com/grpc/grpc/blob/master/doc/health-checking.md
