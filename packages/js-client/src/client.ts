import { CommonGrpcServiceClient } from "./generated/protos/CommonServiceClientPb";
import { EventFilter, EventType, FieldDefinition, Operation, OperationType } from "./generated/protos/types_pb.js";
import { RecordMapper } from "./helper";
import {
  CountResponse,
  GetEndpointsRequest,
  GetFieldsRequest,
  GetFieldsResponse,
  OnEventRequest,
  QueryRequest
} from "./generated/protos/common_pb";
import { DozerFilter, DozerQuery, QueryHelper } from "./query_helper";
import { HealthGrpcServiceClient } from "./generated/protos/HealthServiceClientPb";
import { HealthCheckRequest, HealthCheckResponse } from "./generated/protos/health_pb";
import { ClientReadableStream, Metadata } from "grpc-web";

export interface DozerClientOptions {
  serverAddress: string;
  authToken?: string | null;
  headers?: Record<string, string>;
}

export interface DozerEndpointEvent {
  data: DozerEndpointEventData;
  fields: FieldDefinition[];
  primaryIndexKeys: string[];
  operation: Operation;
  mapper: RecordMapper;
}

export interface DozerEndpointEventData {
  typ: OperationType,
  old?: Object,
  new?: Object,
  newId?: number;
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

  constructor(options: DozerClientOptions) {
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
}

export class DozerEndpoint {
  private endpoint: string;
  private client: DozerClient;
  private fieldsResponse?: GetFieldsResponse;
  private fieldsResponseLoading: boolean = false;
  private fieldsResponseCallback: Function[] = [];
  constructor(endpoint: string, client: DozerClient) {
    this.endpoint = endpoint;
    this.client = client;
  }

  async count(query?: DozerQuery): Promise<CountResponse> {
    // await this.client.waitForHealthCheck();
    const request = new QueryRequest().setEndpoint(this.endpoint);
    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return this.client.service.count(request, this.client.authMetadata);
  }

  async query(query?: DozerQuery): Promise<[FieldDefinition[], Object[]]> {
    // await this.client.waitForHealthCheck();
    const request = new QueryRequest().setEndpoint(this.endpoint);
    if (query) {
      request.setQuery(QueryHelper.convertSchema(query));
    }

    return this.client.service.query(request, this.client.authMetadata).then((response) => {
      const mapper = new RecordMapper(response.getFieldsList());

      return [
        response.getFieldsList(),
        response.getRecordsList().map(v => mapper.mapRecord(v.getRecord()?.getValuesList() ?? [])),
      ];
    });
  }

  async getFields(): Promise<GetFieldsResponse> {
    // await this.client.waitForHealthCheck();
    return this.client.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.client.authMetadata);
  }

  async ensureFields(): Promise<GetFieldsResponse> {
    if (this.fieldsResponse) {
      return Promise.resolve(this.fieldsResponse);
    }
    if (this.fieldsResponseLoading) {
      return new Promise((resolve) => {
        this.fieldsResponseCallback.push(resolve);
      });
    }
    this.fieldsResponseLoading = true;
    return this.getFields().then((response) => {
      this.fieldsResponse = response;
      this.fieldsResponseLoading = false;
      this.fieldsResponseCallback.forEach((cb) => cb(this.fieldsResponse));
      return this.fieldsResponse;
    });
  }

  onEvent(callback: (evt: DozerEndpointEvent) => void, eventType = EventType.ALL, filter?: DozerFilter): ClientReadableStream<Operation> | null {
    let stream: ClientReadableStream<Operation> | null = null;

    const eventFilter = new EventFilter()
      .setType(eventType);

    if (filter) {
      eventFilter.setFilter(QueryHelper.convertFilter(filter));
    }

    const onEventRequest = new OnEventRequest()
    onEventRequest
      .getEndpointsMap()
      .set(this.endpoint, eventFilter);


    stream = this.client.service.onEvent(onEventRequest, this.client.authMetadata);
    stream.on('data', (operation) => {
      this.ensureFields().then((fieldsResponse) => {
        const fields = fieldsResponse.getFieldsList();
        const mapper = new RecordMapper(fields);
        const primaryIndexKeys = fieldsResponse.getPrimaryIndexList().map(index => fields[index].getName());

        const oldValue = operation.getOld();
        const newValue = operation.getNew();

        const data = {
          typ: operation.getTyp(),
          old: oldValue ? mapper.mapRecord(oldValue.getValuesList()) : undefined,
          new: newValue ? mapper.mapRecord(newValue.getValuesList()) : undefined,
          newId: operation.getNewId() ?? undefined,
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
