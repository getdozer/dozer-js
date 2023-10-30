import { expect, jest } from '@jest/globals';
import { ClientReadableStream } from 'grpc-web';
import { DozerClient } from "../src/client";
import { CommonGrpcServiceClient } from "../src/generated/protos/CommonServiceClientPb";
import { HealthGrpcServiceClient } from "../src/generated/protos/HealthServiceClientPb";
import { GetEndpointsRequest, OnEventRequest } from '../src/generated/protos/common_pb';
import { HealthCheckRequest } from '../src/generated/protos/health_pb';
import { EventFilter, EventType } from '../src/generated/protos/types_pb';
import { QueryHelper } from '../src/query_helper';

jest.mock("../src/generated/protos/CommonServiceClientPb");
jest.mock("../src/generated/protos/HealthServiceClientPb");

const serverAddress = "server-address";
const authToken = "test-token";
const headers = { 'x-dozer-app-id': 'test-app-id', 'x-extra-info': 'test-extra-info' };

describe('DozerClient', () => {

  it('should instantialte with server address', () => {
    new DozerClient({ serverAddress });
    expect(CommonGrpcServiceClient).toHaveBeenCalledWith(serverAddress, {});
    expect(HealthGrpcServiceClient).toHaveBeenCalledWith(serverAddress, {});
  });

  it('should instantialte with auth token', () => {
    new DozerClient({ serverAddress, authToken });
    expect(CommonGrpcServiceClient).toHaveBeenCalledWith(serverAddress, { "Authorization": `Bearer ${authToken}` });
    expect(HealthGrpcServiceClient).toHaveBeenCalledWith(serverAddress, { "Authorization": `Bearer ${authToken}` });
  });

  it('should instantialte with full config', () => {
    new DozerClient({ serverAddress, authToken, headers });
    expect(CommonGrpcServiceClient).toHaveBeenCalledWith(serverAddress, { "Authorization": `Bearer ${authToken}`, ...headers });
    expect(HealthGrpcServiceClient).toHaveBeenCalledWith(serverAddress, { "Authorization": `Bearer ${authToken}`, ...headers });
  });

  it('should called correct: healthCheck', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    client.healthCheck();
    expect(HealthGrpcServiceClient.prototype.healthCheck).toBeCalledWith(new HealthCheckRequest(), { "Authorization": `Bearer ${authToken}`, ...headers });
  });

  it('should called correct: getEndpoints', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    client.getEndpoints();
    expect(CommonGrpcServiceClient.prototype.getEndpoints).toBeCalledWith(new GetEndpointsRequest(), { "Authorization": `Bearer ${authToken}`, ...headers })
  });

  it('should called correct: getEndpoint', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    const endpointName = "test-endpoint";
    const endpoint = client.getEndpoint(endpointName);
    expect(endpoint['endpoint']).toEqual(endpointName);
    expect(endpoint['client']).toEqual(client);
  });

  it('should called correct: onEvent', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    const options = [
      {
        endpoint: 'test-endpoint-1',
      },
      {
        endpoint: 'test-endpoint-2',
        eventType: EventType.INSERT_ONLY,
        filter: {
          'key': 'keyword'
        }
      }
    ];
    const stream = client.onEvent(options);

    const onEventRequest = new OnEventRequest();
    const endpointsMap = onEventRequest.getEndpointsMap();

    options.forEach(option => {
      const eventFilter = new EventFilter().setType(option.eventType ?? EventType.ALL);
      if (option.filter) {
        eventFilter.setFilter(QueryHelper.convertFilter(option.filter));
      }
      endpointsMap.set(option.endpoint, eventFilter);
    })

    expect(CommonGrpcServiceClient.prototype.onEvent).toBeCalledWith(onEventRequest, client.authMetadata);
    expect(stream).toStrictEqual(ClientReadableStream);
  });
})

