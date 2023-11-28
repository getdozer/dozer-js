import * as grpc from '@grpc/grpc-js';
import { AuthGrpcServiceClient } from '../gen/auth_grpc_pb';
import { GetAuthTokenRequest, GetAuthTokenResponse } from '../gen/auth_pb';
import { AuthClient } from '../src/auth';

const getAuthTokenMock = jest.fn((request, metadata, callback) => {
  callback(null, new GetAuthTokenResponse().setToken('test-token'));
})

jest.mock('../gen/auth_grpc_pb', () => ({
  AuthGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getAuthToken: getAuthTokenMock,
  }))
}));

const authClientOptions = {
  authToken: 'master-token',
  appId: 'test-id',
  appVersion: 'test-version',
  headers: {
    'x-extra': 'test-extra-info',
  },
}

describe('AuthClient', () => {
  it('should instantialte correct with default serverAddress', () => {
    new AuthClient();
    expect(AuthGrpcServiceClient).toBeCalledWith('localhost:50051', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with specified serverAddress', () => {
    new AuthClient({
      serverAddress: 'localhost:62998',
    });
    expect(AuthGrpcServiceClient).toBeCalledWith('localhost:62998', grpc.credentials.createInsecure());
  });

  it('should instantialte correct with headers', () => {
    const client = new AuthClient(authClientOptions);
    const metadata = grpc.Metadata.fromHttp2Headers({
      ...authClientOptions.headers,
      Authorization: `Bearer ${authClientOptions.authToken}`,
      'X-App-Id': authClientOptions.appId,
      'X-App-Version': authClientOptions.appVersion,
    });
    expect(client['metadata']).toStrictEqual(metadata);
  });

  it ('should call getToken with correct headers', () => {
    const client = new AuthClient(authClientOptions);
    client.getAuthToken('test-filter');
    const request = new GetAuthTokenRequest().setAccessFilter('test-filter');
    expect(getAuthTokenMock).toBeCalledWith(request, client['metadata'], expect.any(Function));
  });

  it ('should return string from getAuthToken', async () => {
    const client = new AuthClient(authClientOptions);
    const response = await client.getAuthToken('test-filter');
    expect(response).toBe('test-token')
  });

});
