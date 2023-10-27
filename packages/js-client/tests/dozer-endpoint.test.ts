import { expect } from '@jest/globals';
import { DozerClient, DozerEndpoint, DozerEndpointEvent } from "../src/client";
import { CommonGrpcServiceClient } from '../src/generated/protos/CommonServiceClientPb';
import { GetFieldsRequest, OnEventRequest, QueryRequest } from '../src/generated/protos/common_pb';
import { EventFilter, EventType, Record, Value } from '../src/generated/protos/types_pb';
import { RecordMapper } from '../src/helper';
import { DozerFilter, DozerQuery, FilterOperator, Order, QueryHelper } from '../src/query_helper';
import { fieldsMockData, primaryIndexList, recordMockData } from './__mock__/common.data';
import { cancelEventMock, countMock, eventMock, fieldsMock, queryMock } from './__mock__/common.mock';


jest.mock("../src/generated/protos/CommonServiceClientPb", () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getFields: fieldsMock,
    count: countMock,
    query: queryMock,
    onEvent: eventMock,
  })),
}));


const serverAddress = "server-address";
const authToken = "test-token";
const headers = { 'x-dozer-app-id': 'test-app-id', 'x-extra-info': 'test-extra-info' };

const endpointName = "test-endpoint";

const filter: DozerFilter = {
  column: {
    [FilterOperator.EQ]: "test",
  }
};
const query: DozerQuery = {
  filter,
  limit: 10,
  skip: 0,
  orderBy: {
    column: Order.ASC,
  }
};


describe('DozerEndpoint', () => {
  let client: DozerClient;
  let endpoint: DozerEndpoint;
  beforeEach(() => {
    client = new DozerClient({ serverAddress, authToken, headers });
    endpoint = new DozerEndpoint(endpointName, client);
    (CommonGrpcServiceClient as jest.Mock).mockClear();
  });

  it('should instantialte correct', () => {
    expect(endpoint['endpoint']).toEqual(endpointName);
    expect(endpoint['client']).toEqual(client);
  });

  it('should called correct: getFields', async () => {
    const response = await endpoint.getFields();

    const request = new GetFieldsRequest();
    request.setEndpoint(endpointName);
    expect(fieldsMock).toBeCalledWith(request, { "Authorization": `Bearer ${authToken}`, ...headers });

    expect(response.toObject().fieldsList).toEqual(fieldsMockData);
    expect(response.toObject().primaryIndexList).toEqual(primaryIndexList);
  });

  it('should called correct: count', async () => {
    const response = await endpoint.count(query);

    const req = new QueryRequest();
    req.setEndpoint(endpointName);
    const queryStr = QueryHelper.convertSchema(query);
    req.setQuery(queryStr);
    expect(countMock).toHaveBeenCalledWith(req, { "Authorization": `Bearer ${authToken}`, ...headers });

    expect(response).toEqual(recordMockData.length);
  });

  it('should called correct: query', async () => {
    const [ fields, records ] = await endpoint.query(query);

    const req = new QueryRequest();
    req.setEndpoint(endpointName);
    const queryStr = QueryHelper.convertSchema(query);
    req.setQuery(queryStr);
    expect(countMock).toHaveBeenCalledWith(req, { "Authorization": `Bearer ${authToken}`, ...headers });


    expect(fields.map(field => field.toObject())).toEqual(fieldsMockData);
    expect(recordMockData.map(data => {
      const record = new Record();
      record.setId(data.id);
      record.setVersion(data.version);
      const values = data.values.map((v) => new Value().setIntValue(v.intValue));
      record.setValuesList(values)
      const mapper = new RecordMapper(fields);
      const resp = mapper.mapRecord(record);
      console.log(resp)
      return resp;
    })).toEqual(records);
  });

  it('should called correct: onEvent', async () => {
    eventMock.mockClear();
    const eventCallback = (evt: DozerEndpointEvent) => {
      expect(evt.operation.getTyp()).toEqual(evt.data.typ);
      expect(evt.operation.getEndpointName()).toEqual(evt.data.endpointName);

      const newRecord = evt.operation.getNew();
      const oldRecord = evt.operation.getOld();

      if(newRecord) {
        expect(evt.data.new).toBeDefined();
        expect(evt.data.new).toEqual(evt.mapper.mapRecord(newRecord));
      }

      if (oldRecord) {
        expect(evt.data.old).toBeDefined();
        expect(evt.data.old).toEqual(evt.mapper.mapRecord(oldRecord));
      }

    };

    const stream = endpoint.onEvent(eventCallback, EventType.ALL, filter);

    const eventFilter = new EventFilter()
    eventFilter
      .setType(EventType.ALL)
      .setFilter(QueryHelper.convertFilter(filter));

    const request = new OnEventRequest();
    request
      .getEndpointsMap()
      .set(endpointName, eventFilter);

    expect(eventMock).toHaveBeenCalledWith(request, { "Authorization": `Bearer ${authToken}`, ...headers });

    stream?.cancel();
    expect(cancelEventMock).toHaveBeenCalled();
  });
})
