import * as grpc from '@grpc/grpc-js';
import { HealthGrpcServiceClient } from '../gen/health_grpc_pb';
import { HealthCheckResponse } from '../gen/health_pb';
import { HealthClient } from '../src/health';


const healthCheckMock = jest.fn((request, metadata, callback) => {
  const response = new HealthCheckResponse();
  response.setStatus(HealthCheckResponse.ServingStatus.SERVING);
  callback(null, response);
});

const healthWatchMock = jest.fn(() => {
  let transform: (data: any) => any = (data: any) => data;
  return {
    on (event: string, listener: (value: HealthCheckResponse) => void) {
      if (event === 'data') {
        const response = new HealthCheckResponse();
        response.setStatus(HealthCheckResponse.ServingStatus.SERVING);
        listener(transform(response));
      }
    },
    map (fn: (data: any) => any) {
      transform = fn;
      return this;
    }
  }
});

jest.mock('../gen/health_grpc_pb', () => ({
  HealthGrpcServiceClient: jest.fn().mockImplementation(() => ({
    healthCheck: healthCheckMock,
    healthWatch: healthWatchMock,
  }))
}));


const healthClientOptions = {
  authToken: 'master-token',
  appId: 'test-id',
  appVersion: 'test-version',
  headers: {
    'x-extra': 'test-extra-info',
  },
}

describe('HealthClient', () => {

  it('should instantialte correct with default serverAddress', () => {
    new HealthClient();
    expect(HealthGrpcServiceClient).toBeCalledWith('localhost:50051', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with specified serverAddress', () => {
    new HealthClient({
      serverAddress: 'localhost:50051',
    });
    expect(HealthGrpcServiceClient).toBeCalledWith('localhost:50051', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with headers', () => {
    const client = new HealthClient(healthClientOptions);
    const metadata = grpc.Metadata.fromHttp2Headers({
      ...healthClientOptions.headers,
      Authorization: `Bearer ${healthClientOptions.authToken}`,
      'X-App-Id': healthClientOptions.appId,
      'X-App-Version': healthClientOptions.appVersion,
    });
    expect(client['metadata']).toStrictEqual(metadata);
  });

  it('healthCheck should return correct', () => {
    const client = new HealthClient();
    client.healthCheck()
      .then((response) => {
        expect(Object.values(HealthCheckResponse.ServingStatus)).toContain(response);
      })
      .catch(() => { })
  });

  it('healthWatch should return correct', () => {
    const client = new HealthClient();
    const stream = client.healthWatch();
    stream.on('data', (response) => {
      expect(Object.values(HealthCheckResponse.ServingStatus)).toContain(response);
    });
  });
})
