import { jest } from '@jest/globals';
import { ClientReadableStream, Metadata } from 'grpc-web';
import { CountResponse, GetFieldsRequest, GetFieldsResponse, OnEventRequest, QueryRequest, QueryResponse } from '../../src/generated/protos/common_pb';
import { FieldDefinition, Operation, Record, RecordWithId, Value } from '../../src/generated/protos/types_pb';
import { eventMockData, fieldsMockData, primaryIndexList, recordMockData } from './common.data';

jest.mock('grpc-web', );

export const fieldsMock = jest.fn<(request: GetFieldsRequest, metadata: Metadata | null) => Promise<GetFieldsResponse>>(() => {
  const resp = new GetFieldsResponse();
  fieldsMockData.forEach((field) => {
    resp.addFields(new FieldDefinition().setTyp(field.typ).setName(field.name).setNullable(field.nullable));
  });
  resp.setPrimaryIndexList(primaryIndexList);
  return Promise.resolve(resp);
})



export const countMock = jest.fn<(request: QueryRequest, metadata: Metadata | null) => Promise<CountResponse>>(() => {
  const resp = new CountResponse();
  resp.setCount(recordMockData.length);
  return Promise.resolve(resp);
});

export const queryMock = jest.fn<(request: QueryRequest, metadata: Metadata | null) => Promise<QueryResponse>>(() => {
  const resp = new QueryResponse();

  fieldsMockData.forEach((field) => {
    resp.addFields(new FieldDefinition().setTyp(field.typ).setName(field.name).setNullable(field.nullable));
  })
  
  recordMockData.forEach((item) => {
    const record = new Record();
    record.setValuesList(item.record.values.map(v => new Value().setIntValue(v.intValue)));
    record.setVersion(item.record.version);
    resp.addRecords(new RecordWithId().setId(item.id).setRecord(record));
  });

  return Promise.resolve(resp);
})

export const onEventMock = jest.fn((event: string, callback: (operation?: Operation) => void) => {
  if (event === "data") {
    eventMockData.forEach((item) => {
      const operation = new Operation();
      operation.setEndpointName(item.endpointName);
      operation.setTyp(item.typ);
      
      if (item.new) {
        const newRecord = new Record();
        newRecord.setVersion(item.new.version);
        newRecord.setValuesList(item.new.values.map(v => new Value().setIntValue(v.intValue)));
        operation.setNew(newRecord);
      }
      
      if (item.old) {
        const oldRecord = new Record();
        oldRecord.setVersion(item.old.version);
        oldRecord.setValuesList(item.old.values.map(v => new Value().setIntValue(v.intValue)));
        operation.setNew(oldRecord);
      }

      if (item.newId) {
        operation.setNewId(item.newId);
      }
      
      callback(operation);
    });
  } else if (event === "end") {
    callback();
  }
});

export const cancelEventMock = jest.fn();

export const eventMock = jest.fn<(request: OnEventRequest, metadata: Metadata | null) => ClientReadableStream<Operation>>(() => {
  return {
    on: onEventMock,
    cancel: cancelEventMock,
  } as unknown as ClientReadableStream<Operation>;
});

export const CommonGrpcServiceClientMock = jest.fn().mockImplementation(() => ({
  getFields: fieldsMock,
  count: countMock,
  query: queryMock,
  onEvent: eventMock,
}));

