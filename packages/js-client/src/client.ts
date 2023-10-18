import { CommonGrpcServiceClient } from "./generated/protos/CommonServiceClientPb";
import { EventFilter, EventType, FieldDefinition, Operation, OperationType } from "./generated/protos/types_pb.js";
import { RecordMapper } from "./helper";
import {
  GetEndpointsRequest,
  GetFieldsRequest,
  GetFieldsResponse,
  OnEventRequest,
  QueryRequest
} from "./generated/protos/common_pb";
import { DozerFilter, DozerQuery, DozerRecord, QueryHelper } from "./query_helper";
import { HealthGrpcServiceClient } from "./generated/protos/HealthServiceClientPb";
import { HealthCheckRequest, HealthCheckResponse } from "./generated/protos/health_pb";
import { ClientReadableStream, Metadata } from "grpc-web";

export interface DozerClientOptions {
  serverAddress: string;
  authToken?: string | null;
  headers?: Record<string, string>;
}

export interface DozerEndpointEvent<T = any> {
  data: DozerEndpointEventData<T>;
  fields: FieldDefinition[];
  primaryIndexKeys: string[];
  operation: Operation;
  mapper: RecordMapper;
}

export interface DozerEndpointEventData<T = any> {
  typ: OperationType,
  old?: DozerRecord<T>,
  new?: DozerRecord<T>,
  endpointName: string;
}

const defaultDozerClientOptions = {
  serverAddress: "http://localhost:50051",
  authToken: null,
  headers: {}
};

export class DozerClient {
  options: DozerClientOptions;
  service: CommonGrpcServiceClient;
  healthService: HealthGrpcServiceClient;
  authMetadata: Metadata = {};
  private fieldsResponseCache = new Map<string, Promise<GetFieldsResponse>>();

  constructor(options?: DozerClientOptions) {
    this.options = { ...defaultDozerClientOptions, ...options };
    this.authMetadata = (this.options.authToken ? { Authorization: 'Bearer ' + this.options.authToken } : {}) as Metadata;
    Object.assign(this.authMetadata, this.options.headers);
    this.service = new CommonGrpcServiceClient(
      this.options.serverAddress,
      this.authMetadata
    );
    this.healthService = new HealthGrpcServiceClient(
      this.options.serverAddress,
      this.authMetadata
    );
  }

  healthCheck(): Promise<HealthCheckResponse> {
    return this.healthService.healthCheck(new HealthCheckRequest(), this.authMetadata);
  }

  async waitForHealthCheck(retry = 5): Promise<void> {
    const response = await this.healthCheck();
    if (response.getStatus() === HealthCheckResponse.ServingStatus.SERVING) {
      return Promise.resolve();
    }

    if (retry > 0) {
      return this.waitForHealthCheck(retry - 1);
    }

    return Promise.reject(response.getStatus());
  }

  getEndpoints() {
    return this.service.getEndpoints(new GetEndpointsRequest(), this.authMetadata);
  }

  getEndpoint(endpoint: string): DozerEndpoint {
    return new DozerEndpoint(endpoint, this);
  }

  ensureFields(endpoint: string): Promise<GetFieldsResponse> {
    let cache = this.fieldsResponseCache.get(endpoint);

    if (cache === undefined) {
      cache = this.service.getFields(new GetFieldsRequest().setEndpoint(endpoint), this.authMetadata);
      this.fieldsResponseCache.set(endpoint, cache);
    }

    return cache;
  }

  onEvent(options: {
    endpoint: string,
    eventType?: EventType,
    filter?: DozerFilter,
  }[]) {
    const onEventRequest = new OnEventRequest()
    const endpointsMap = onEventRequest.getEndpointsMap();

    options.forEach(option => {
      const eventFilter = new EventFilter()
        .setType(option.eventType ?? EventType.ALL);

      if (option.filter) {
        eventFilter.setFilter(QueryHelper.convertFilter(option.filter));
      }
      endpointsMap.set(option.endpoint, eventFilter);
    });

    return this.service.onEvent(onEventRequest, this.authMetadata);
  }
}

export class DozerEndpoint {
  private endpoint: string;
  private client: DozerClient;
  constructor(endpoint: string, client: DozerClient) {
    this.endpoint = endpoint;
    this.client = client;
  }

  async count(query?: DozerQuery): Promise<number> {
    // await this.client.waitForHealthCheck();
    const request = new QueryRequest().setEndpoint(this.endpoint);
    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return this.client.service.count(request, this.client.authMetadata).then((response) => {
      return response.getCount();
    });
  }

  async query<T = any>(query?: DozerQuery): Promise<[FieldDefinition[], DozerRecord<T>[]]> {
    // await this.client.waitForHealthCheck();
    const request = new QueryRequest().setEndpoint(this.endpoint);
    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return this.client.service.query(request, this.client.authMetadata).then((response) => {
      const mapper = new RecordMapper(response.getFieldsList());

      return [
        response.getFieldsList(),
        response.getRecordsList().map(v => mapper.mapRecord(v)),
      ];
    });
  }

  async getFields(): Promise<GetFieldsResponse> {
    // await this.client.waitForHealthCheck();
    return this.client.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.client.authMetadata);
  }

  async ensureFields(): Promise<GetFieldsResponse> {
    return this.client.ensureFields(this.endpoint);
  }

  onEvent(callback: (evt: DozerEndpointEvent) => void, eventType = EventType.ALL, filter?: DozerFilter): ClientReadableStream<Operation> {
    const stream = this.client.onEvent([
      {
        endpoint: this.endpoint,
        eventType,
        filter,
      },
    ]);

    stream.on('data', (operation: Operation) => {
      this.ensureFields().then((fieldsResponse) => {
        const fields = fieldsResponse.getFieldsList();
        const mapper = new RecordMapper(fields);
        const primaryIndexKeys = fieldsResponse.getPrimaryIndexList().map(index => fields[index].getName());

        const oldValue = operation.getOld();
        const newValue = operation.getNew();

        const data = {
          typ: operation.getTyp(),
          old: oldValue ? mapper.mapRecord(oldValue) : undefined,
          new: newValue ? mapper.mapRecord(newValue) : undefined,
          endpointName: operation.getEndpointName(),
        };

        callback({ data, fields, primaryIndexKeys, operation, mapper });
      });
    });
    stream.on('error', (err) => {
      console.error(err);
      stream?.cancel();
    });
    return stream;
  }
}
