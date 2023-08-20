import {CommonGrpcServiceClient} from "./generated/protos/CommonServiceClientPb";
import {EventType, FieldDefinition, Operation, OperationType} from "./generated/protos/types_pb";
import {RecordMapper} from "./helper";
import {
    CountResponse,
    GetEndpointsRequest,
    GetFieldsRequest,
    GetFieldsResponse,
    OnEventRequest,
    QueryRequest
} from "./generated/protos/common_pb";
import {DozerFilter, DozerQuery, QueryHelper} from "./query_helper";
import {HealthGrpcServiceClient} from "./generated/protos/HealthServiceClientPb";
import {HealthCheckRequest, HealthCheckResponse} from "./generated/protos/health_pb";
import {ClientReadableStream, Metadata} from "grpc-web";

/**
 * @deprecated
 * use DozerClientOptions instead
 */
export interface ApiClientOptions {
    serverAddress?: string,
    authToken?: string | null
}

const defaultApiClientOptions = {
    serverAddress: 'http://localhost:50051',
    authToken: null
}

/**
 * @deprecated
 * use DozerClient instead
 * 
 * @example
 * ```typescript
 * const client = new DozerClient();
 * const endpoint = client.getEndpoint('flights');
 * const [fields, records] = await endpoint.query();
 * const count = await endpoint.count();
 * const stream = endpoint.onEvent((evt: DozerEndpointEvent) => {
 *   console.log(evt.data);
 *   console.log(evt.fields);
 *   console.log(evt.primaryIndexKeys);
 *   console.log(evt.operation);
 *   console.log(evt.mapper);
 * });
 * ```
 */
export class ApiClient {
    private readonly endpoint: string;
    private service: CommonGrpcServiceClient;
    private healthService: HealthGrpcServiceClient;
    private readonly authMetadata: Metadata;

    constructor(endpoint: string, clientOptions?: ApiClientOptions) {
        const options = {...defaultApiClientOptions, ...clientOptions};
        this.endpoint = endpoint;
        this.authMetadata = (options.authToken ? {Authorization: 'Bearer ' + options.authToken} : {}) as Metadata;
        this.service = new CommonGrpcServiceClient(options.serverAddress, this.authMetadata);
        this.healthService = new HealthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }

    async healthCheck(): Promise<HealthCheckResponse> {
        return this.healthService.healthCheck(new HealthCheckRequest(), this.authMetadata);
    }

    async count(query: DozerQuery | null = null): Promise<CountResponse> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }
        return this.service.count(request, this.authMetadata);
    }

    async query(query: DozerQuery | null = null): Promise<[FieldDefinition[], Object[]]> {
        let request = new QueryRequest().setEndpoint(this.endpoint);
        if (query !== null) {
            request.setQuery(QueryHelper.convertSchema(query))
        }

        return await this.service.query(request, this.authMetadata).then((response) => {
            let mapper = new RecordMapper(response.getFieldsList());

            return [
                response.getFieldsList(),
                response.getRecordsList().map(v => mapper.mapRecord(v.getRecord()?.getValuesList() ?? []))
            ];
        });
    }

    onEvent(eventType = EventType.ALL, filter: DozerFilter | null = null): ClientReadableStream<Operation> {
        const onEventRequest = new OnEventRequest()
        .setEndpoint(this.endpoint)
        .setType(eventType);
        if (filter) {
            onEventRequest.setFilter(QueryHelper.convertFilter(filter));
        }

        return this.service.onEvent(onEventRequest, this.authMetadata);
    }

    async getFields(): Promise<GetFieldsResponse> {
        return await this.service.getFields(new GetFieldsRequest().setEndpoint(this.endpoint), this.authMetadata);
    }
}


export interface DozerClientOptions {
  serverAddress: string;
  authToken?: string | null;
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
};

export class DozerClient {
  options: DozerClientOptions;
  service: CommonGrpcServiceClient;
  healthService: HealthGrpcServiceClient;
  authMetadata: Metadata = {};

  constructor(options: DozerClientOptions) {
    this.options = { ...defaultDozerClientOptions, ...options };
    if (this.options.authToken) {
      this.authMetadata.Authorization = "Bearer " + this.options.authToken;
    }
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
    const onEventRequest = new OnEventRequest()
      .setEndpoint(this.endpoint)
      .setType(eventType);

    if (filter) {
      onEventRequest.setFilter(QueryHelper.convertFilter(filter));
    }

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
