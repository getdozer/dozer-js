import * as grpc from '@grpc/grpc-js';
import { AuthGrpcServiceClient } from '../gen/auth_grpc_pb';
import { GetAuthTokenRequest } from '../gen/auth_pb';

export interface AuthClientOptions {
  serverAddress?: string;
  authToken?: string;
  appId?: string;
  appVersion?: string;
  headers?: Record<string, string>;
}

export class AuthClient {
  private metadata: grpc.Metadata;
  private service: AuthGrpcServiceClient;

  constructor(options?: AuthClientOptions) {
    this.service = new AuthGrpcServiceClient(
      options?.serverAddress ?? 'localhost:50051',
      grpc.credentials.createInsecure(),
    );

    this.metadata = new grpc.Metadata();

    if (options?.headers) {
      Object.keys(options.headers).forEach(key => {
        this.metadata.set(key, options.headers![key]);
      });
    }

    if (options?.authToken) {
      this.metadata.set('Authorization', `Bearer ${options.authToken}`);
    }
    if (options?.appId) {
      this.metadata.set('X-App-Id', options.appId);
    }

    if (options?.appVersion) {
      this.metadata.set('X-App-Version', options.appVersion);
    }
  }

  getAuthToken(filter: string): Promise<string> {
    const request = new GetAuthTokenRequest().setAccessFilter(filter);
    return new Promise((resolve, reject) => {
      this.service.getAuthToken(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getToken());
        }
      });
    });
  }

}
