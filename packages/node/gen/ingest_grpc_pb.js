// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ingest_pb = require('./ingest_pb.js');
var types_pb = require('./types_pb.js');

function serialize_dozer_ingest_IngestArrowRequest(arg) {
  if (!(arg instanceof ingest_pb.IngestArrowRequest)) {
    throw new Error('Expected argument of type dozer.ingest.IngestArrowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_ingest_IngestArrowRequest(buffer_arg) {
  return ingest_pb.IngestArrowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_ingest_IngestRequest(arg) {
  if (!(arg instanceof ingest_pb.IngestRequest)) {
    throw new Error('Expected argument of type dozer.ingest.IngestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_ingest_IngestRequest(buffer_arg) {
  return ingest_pb.IngestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dozer_ingest_IngestResponse(arg) {
  if (!(arg instanceof ingest_pb.IngestResponse)) {
    throw new Error('Expected argument of type dozer.ingest.IngestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dozer_ingest_IngestResponse(buffer_arg) {
  return ingest_pb.IngestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var IngestServiceService = exports.IngestServiceService = {
  ingest: {
    path: '/dozer.ingest.IngestService/ingest',
    requestStream: false,
    responseStream: false,
    requestType: ingest_pb.IngestRequest,
    responseType: ingest_pb.IngestResponse,
    requestSerialize: serialize_dozer_ingest_IngestRequest,
    requestDeserialize: deserialize_dozer_ingest_IngestRequest,
    responseSerialize: serialize_dozer_ingest_IngestResponse,
    responseDeserialize: deserialize_dozer_ingest_IngestResponse,
  },
  ingest_stream: {
    path: '/dozer.ingest.IngestService/ingest_stream',
    requestStream: true,
    responseStream: false,
    requestType: ingest_pb.IngestRequest,
    responseType: ingest_pb.IngestResponse,
    requestSerialize: serialize_dozer_ingest_IngestRequest,
    requestDeserialize: deserialize_dozer_ingest_IngestRequest,
    responseSerialize: serialize_dozer_ingest_IngestResponse,
    responseDeserialize: deserialize_dozer_ingest_IngestResponse,
  },
  ingest_arrow: {
    path: '/dozer.ingest.IngestService/ingest_arrow',
    requestStream: false,
    responseStream: false,
    requestType: ingest_pb.IngestArrowRequest,
    responseType: ingest_pb.IngestResponse,
    requestSerialize: serialize_dozer_ingest_IngestArrowRequest,
    requestDeserialize: deserialize_dozer_ingest_IngestArrowRequest,
    responseSerialize: serialize_dozer_ingest_IngestResponse,
    responseDeserialize: deserialize_dozer_ingest_IngestResponse,
  },
  ingest_arrow_stream: {
    path: '/dozer.ingest.IngestService/ingest_arrow_stream',
    requestStream: true,
    responseStream: false,
    requestType: ingest_pb.IngestArrowRequest,
    responseType: ingest_pb.IngestResponse,
    requestSerialize: serialize_dozer_ingest_IngestArrowRequest,
    requestDeserialize: deserialize_dozer_ingest_IngestArrowRequest,
    responseSerialize: serialize_dozer_ingest_IngestResponse,
    responseDeserialize: deserialize_dozer_ingest_IngestResponse,
  },
};

exports.IngestServiceClient = grpc.makeGenericClientConstructor(IngestServiceService);
