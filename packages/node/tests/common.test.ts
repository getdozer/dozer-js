import * as grpc from '@grpc/grpc-js';
import { CommonGrpcServiceClient } from '../gen/common_grpc_pb';
import { CommonClient } from '../src/common';
import { CountResponse, GetEndpointsRequest, GetEndpointsResponse, GetFieldsRequest, GetFieldsResponse, OnEventRequest, QueryRequest, QueryResponse } from '../gen/common_pb';
import { EventFilter, EventType, FieldDefinition, Record, Type, Value } from '../gen/types_pb';
import { QueryHelper } from '../src/helper';


const getEndpointsMock = jest.fn((request, metadata, callback) => {
  const response = new GetEndpointsResponse();
  response.setEndpointsList(['test-endpoint']);
  callback(null, response);
});

const getFieldsMock = jest.fn((request, metadata, callback) => {
  const response = new GetFieldsResponse();
  response.setFieldsList([
    new FieldDefinition()
      .setTyp(Type.STRING)
      .setName('name')
      .setNullable(false)
  ]);
  callback(null, response);
});

const queryMock = jest.fn((request, metadata, callback) => {
  const response = new QueryResponse();
  response.setFieldsList([
    new FieldDefinition()
      .setTyp(Type.STRING)
      .setName('name')
      .setNullable(false)
  ]);
  response.setRecordsList([
    new Record()
      .setId(1)
      .setVersion(0)
      .setValuesList([
        new Value().setStringValue('test-name'),
      ])
  ]);
  callback(null, response);
});

const countMock = jest.fn((request, metadata, callback) => {
  const response = new CountResponse();
  response.setCount(1);

  callback(null, response);
});

const onEventMock = jest.fn();

jest.mock('../gen/common_grpc_pb', () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getEndpoints: getEndpointsMock,
    getFields: getFieldsMock,
    query: queryMock,
    count: countMock,
    onEvent: onEventMock,
  }))
}));


const commonClientOptions = {
  authToken: 'master-token',
  appId: 'test-id',
  appVersion: 'test-version',
  headers: {
    'x-extra': 'test-extra-info',
  },
}

describe('CommonClient', () => {
  it('should instantialte correct with default serverAddress', () => {
    new CommonClient();
    expect(CommonGrpcServiceClient).toBeCalledWith('localhost:50051', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with specified serverAddress', () => {
    new CommonClient({
      serverAddress: 'localhost:62998',
    });
    expect(CommonGrpcServiceClient).toBeCalledWith('localhost:62998', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with headers', () => {
    const client = new CommonClient(commonClientOptions);
    const metadata = grpc.Metadata.fromHttp2Headers({
      ...commonClientOptions.headers,
      Authorization: `Bearer ${commonClientOptions.authToken}`,
      'X-App-Id': commonClientOptions.appId,
      'X-App-Version': commonClientOptions.appVersion,
    });
    expect(client['metadata']).toStrictEqual(metadata);
  });

  it('getEndpoints should called correct ', () => {
    const client = new CommonClient(commonClientOptions);
    client.getEndpoints();
    const request = new GetEndpointsRequest();
    expect(getEndpointsMock).toBeCalledWith(request, client['metadata'], expect.any(Function));
  });

  it ('getEndpoints should return correct', async () => {
    const client = new CommonClient();
    const response = await client.getEndpoints();
    expect(response).toStrictEqual(['test-endpoint']);
  });

  it('getFields should called correct ', () => {
    const client = new CommonClient(commonClientOptions);
    client.getFields('test-endpoint');
    const request = new GetFieldsRequest();
    request.setEndpoint('test-endpoint');
    expect(getFieldsMock).toBeCalledWith(request, client['metadata'], expect.any(Function));
  });

  it ('getFields should return correct', async () => {
    const client = new CommonClient();
    const response = await client.getFields('test-endpoinst');
    expect(response).toStrictEqual([ { typ: Type.STRING, name: 'name', nullable: false } ]);
  });

  it('query should called correct ', () => {
    const client = new CommonClient(commonClientOptions);
    const query = { limit: 1 };
    client.query('test-endpoint', query);
    const request = new QueryRequest();
    request.setEndpoint('test-endpoint');
    request.setQuery(QueryHelper.convertSchema(query));
    expect(queryMock).toBeCalledWith(request, client['metadata'], expect.any(Function));
  });

  it ('query should return correct', async () => {
    const client = new CommonClient();
    const query = { limit: 1 };
    const response = await client.query('test-endpoinst', query);
    expect(response).toStrictEqual([
      [ { typ: Type.STRING, name: 'name', nullable: false } ],
      [ { __dozer_record_id: 1, __dozer_record_version: 0, name: 'test-name' }],
    ]);
  });

  it('count should called correct ', () => {
    const client = new CommonClient(commonClientOptions);
    const query = { limit: 1 };
    client.count('test-endpoint', query);
    const request = new QueryRequest();
    request.setEndpoint('test-endpoint');
    request.setQuery(QueryHelper.convertSchema(query));
    expect(countMock).toBeCalledWith(request, client['metadata'], expect.any(Function));
  });

  it ('count should return correct', async () => {
    const client = new CommonClient();
    const query = { limit: 1 };
    const response = await client.count('test-endpoinst', query);
    expect(response).toBe(1);
  });

  it('onEvent should called correct ', () => {
    const client = new CommonClient(commonClientOptions);
    const options = [
      { endpoint: 'test-endpoint', eventType: EventType.ALL, filter: { name: 'test-name' } },
    ];
    client.onEvent(options);
    const request = new OnEventRequest();
    const endpointsMap = request.getEndpointsMap();

    options.forEach(option => {
      const eventFilter = new EventFilter()
        .setType(option.eventType ?? EventType.ALL);

      if (option.filter) {
        eventFilter.setFilter(QueryHelper.convertFilter(option.filter));
      }
      endpointsMap.set(option.endpoint, eventFilter);
    });

    expect(onEventMock).toBeCalledWith(request, client['metadata']);
  });
});
