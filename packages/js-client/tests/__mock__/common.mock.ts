import { jest } from '@jest/globals';
import { ClientReadableStream, Metadata } from 'grpc-web';
import { CountResponse, GetFieldsRequest, GetFieldsResponse, OnEventRequest, QueryRequest, QueryResponse } from '../../src/generated/protos/common_pb';
import { FieldDefinition, Operation, Record, Value } from '../../src/generated/protos/types_pb';
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
    record.setId(item.id);
    record.setValuesList(item.values.map(v => new Value().setIntValue(v.intValue)));
    record.setVersion(item.version);
    resp.addRecords(record);
  });

  return Promise.resolve(resp);
})

export const onEventDataMock = jest.fn((callback: (operation: Operation) => void) => {
  eventMockData.forEach((item) => {
    const operation = new Operation();
    operation.setEndpointName(item.endpointName);
    operation.setTyp(item.typ);

    if (item.new) {
      const newRecord = new Record();
      newRecord.setId(item.new.id);
      newRecord.setVersion(item.new.version);
      newRecord.setValuesList(item.new.values.map(v => new Value().setIntValue(v.intValue)));
      operation.setNew(newRecord);
    }

    if (item.old) {
      const oldRecord = new Record();
      oldRecord.setId(item.old.id);
      oldRecord.setVersion(item.old.version);
      oldRecord.setValuesList(item.old.values.map(v => new Value().setIntValue(v.intValue)));
      operation.setNew(oldRecord);
    }

    callback(operation);
  });
});

export const onEventErrorMock = jest.fn();

export const onEventMock = jest.fn((event: string, callback: (operation: Operation) => void) => {
  if (event === "data") {
    onEventDataMock(callback);
  } else if (event === 'error') {
    onEventErrorMock();
  }
});

export const removeEventDataMock = jest.fn((callback: (operation: Operation) => void) => {
  const operation = new Operation();
  callback(operation);
});

export const removeEventErrorMock = jest.fn();

export const removeEventMock = jest.fn((event: string, callback: (operation: Operation) => void) => {
  if (event === 'data') {
    removeEventDataMock(callback);
  } else if (event === 'error') {
    removeEventErrorMock();
  }
});

export const cancelEventMock = jest.fn();

export const eventMock = jest.fn<(request: OnEventRequest, metadata: Metadata | null) => ClientReadableStream<Operation>>(() => {
  return {
    on: onEventMock,
    removeListener: removeEventMock,
    cancel: cancelEventMock,
  } as unknown as ClientReadableStream<Operation>;
});

export const CommonGrpcServiceClientMock = jest.fn().mockImplementation(() => ({
  getFields: fieldsMock,
  count: countMock,
  query: queryMock,
  onEvent: eventMock,
}));

