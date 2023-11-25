import * as grpc from '@grpc/grpc-js';
import { IngestServiceClient } from '../gen/ingest_grpc_pb';
import { IngestArrowRequest, IngestRequest, IngestResponse  } from '../gen/ingest_pb';

export interface IngestClientOptions {
  serverAddress?: string;
}

export class IngestClient {
  private metadata: grpc.Metadata;
  private service: IngestServiceClient;

  constructor(options?: IngestClientOptions) {
    this.service = new IngestServiceClient(
      options?.serverAddress ?? 'localhost:8085',
      grpc.credentials.createInsecure(),
    );

    this.metadata = new grpc.Metadata();
  }

  ingest(request: IngestRequest): Promise<IngestResponse> {
    return new Promise((resolve, reject) => {
      this.service.ingest(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  ingest_stream(): grpc.ClientWritableStream<IngestRequest> {
    return this.service.ingest_stream(this.metadata, () => {});
  }

  ingest_arrow(request: IngestArrowRequest): Promise<IngestResponse> {
    return new Promise((resolve, reject) => {
      this.service.ingest_arrow(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  ingest_arrow_stream(): grpc.ClientWritableStream<IngestArrowRequest> {
    return this.service.ingest_arrow_stream(this.metadata, () => {});
  }

}
