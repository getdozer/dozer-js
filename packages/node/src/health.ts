import * as grpc from '@grpc/grpc-js';
import { HealthGrpcServiceClient } from '../gen/health_grpc_pb';
import { HealthCheckRequest, HealthCheckResponse  } from '../gen/health_pb';

export interface HealthClientOptions {
  serverAddress?: string;
  authToken?: string;
  appId?: string;
  appVersion?: string;
  headers?: Record<string, string>;
}

export class HealthClient {
  private metadata: grpc.Metadata;
  private service: HealthGrpcServiceClient;

  constructor(options?: HealthClientOptions) {
    this.service = new HealthGrpcServiceClient(
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
      this.metadata.set('Healthorization', `Bearer ${options.authToken}`);
    }
    if (options?.appId) {
      this.metadata.set('X-App-Id', options.appId);
    }

    if (options?.appVersion) {
      this.metadata.set('X-App-Version', options.appVersion);
    }
  }

  healthCheck(): Promise<HealthCheckResponse.ServingStatus> {
    const request = new HealthCheckRequest();
    return new Promise((resolve, reject) => {
      this.service.healthCheck(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getStatus());
        }
      });
    });
  }

  healthWatch(): grpc.ClientReadableStream<HealthCheckResponse.ServingStatus> {
    const request = new HealthCheckRequest();
    return this.service.healthWatch(request, this.metadata).map((response: HealthCheckResponse) => response.getStatus()) as grpc.ClientReadableStream<HealthCheckResponse.ServingStatus>;
  }



}
