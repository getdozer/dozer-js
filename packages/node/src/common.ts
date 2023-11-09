import * as grpc from '@grpc/grpc-js';
import { CommonGrpcServiceClient } from '../gen/common_grpc_pb';
import { GetEndpointsRequest, GetFieldsRequest, OnEventRequest, QueryRequest } from '../gen/common_pb';
import { EventFilter, EventType, FieldDefinition, Operation } from '../gen/types_pb';
import { DozerOnEventOption, DozerQuery, DozerRecord, QueryHelper, RecordMapper } from './helper';

export interface CommonClientOptions {
  serverAddress?: string;
  authToken?: string;
  appId?: string;
  appVersion?: string;
  headers?: Record<string, string>;
}

export class CommonClient {
  private metadata: grpc.Metadata;
  private service: CommonGrpcServiceClient;

  constructor(options?: CommonClientOptions) {
    this.service = new CommonGrpcServiceClient(
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

  getEndpoints(): Promise<string[]> {
    const request = new GetEndpointsRequest();
    return new Promise((resolve, reject) => {
      this.service.getEndpoints(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getEndpointsList());
        }
      });
    });
  }

  getFields(endpoint: string) {
    const request = new GetFieldsRequest().setEndpoint(endpoint);
    return new Promise((resolve, reject) => {
      return this.service.getFields(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getFieldsList());
        }
      });
    });
  }

  query<T>(endpoint: string, query?: DozerQuery): Promise<[FieldDefinition.AsObject[], DozerRecord<T>[]]> {
    const request = new QueryRequest().setEndpoint(endpoint);

    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return new Promise((resolve, reject) => {
      this.service.query(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const fields = response.getFieldsList().map(item => item.toObject());
          const mapper = new RecordMapper(fields);
          const records = response.getRecordsList().map(v => mapper.mapRecord<T>(v));
          resolve([ fields, records ]);
        }
      });
    });
  }

  count(endpoint: string, query?: DozerQuery): Promise<number> {
    const request = new QueryRequest().setEndpoint(endpoint);

    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return new Promise((resolve, reject) => {
      this.service.count(request, this.metadata, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getCount());
        }
      });
    });
  }

  onEvent(options: DozerOnEventOption[]): grpc.ClientReadableStream<Operation> {
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

    return this.service.onEvent(request, this.metadata);
  }

}
