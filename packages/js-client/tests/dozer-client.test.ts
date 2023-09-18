import { expect, jest } from '@jest/globals';
import { Metadata } from 'grpc-web';
import { DozerClient } from "../src/client";
import { CommonGrpcServiceClient } from "../src/generated/protos/CommonServiceClientPb";
import { HealthGrpcServiceClient } from "../src/generated/protos/HealthServiceClientPb";
import { HealthCheckRequest } from '../src/generated/protos/health_pb';
import { GetEndpointsRequest } from '../src/generated/protos/common_pb';

jest.mock("../src/generated/protos/CommonServiceClientPb");
jest.mock("../src/generated/protos/HealthServiceClientPb");

const serverAddress = "server-address";
const authToken = "test-token";
const headers = { 'x-dozer-app-id': 'test-app-id', 'x-extra-info': 'test-extra-info' };

describe('DozerClient', () => {
  beforeEach(() => {
    (CommonGrpcServiceClient as jest.Mock).mockClear();
    (HealthGrpcServiceClient as jest.Mock).mockClear();
  });
  
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
    (jest.mocked(HealthGrpcServiceClient) as any).mockImplementation(() => ({
      healthCheck: jest.fn((request: HealthCheckRequest, metadata: Metadata | null) => {
        expect(request.toObject()).toEqual({});
        expect(metadata).toEqual({ "Authorization": `Bearer ${authToken}`, ...headers });
      })
    }));
    client.healthCheck();
  });

  it('should called correct: getEndpoints', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    (jest.mocked(CommonGrpcServiceClient) as any).mockImplementation(() => ({
      getEndpoints: jest.fn((request: GetEndpointsRequest, metadata: Metadata | null) => {
        expect(request.toObject()).toEqual({});
        expect(metadata).toEqual({ "Authorization": `Bearer ${authToken}`, ...headers });
      })
    }));
    client.getEndpoints();
  });

  it('should called correct: getEndpoint', async () => {
    const client = new DozerClient({ serverAddress, authToken, headers });
    const endpointName = "test-endpoint";
    const endpoint = client.getEndpoint(endpointName);
    expect(endpoint['endpoint']).toEqual(endpointName);
    expect(endpoint['client']).toEqual(client);
  });
})

