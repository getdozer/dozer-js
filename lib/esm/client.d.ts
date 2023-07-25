import { CommonGrpcServiceClient } from "./generated/protos/CommonServiceClientPb";
import { EventType, FieldDefinition, Operation, OperationType } from "./generated/protos/types_pb";
import { RecordMapper } from "./helper";
import { CountResponse, GetFieldsResponse } from "./generated/protos/common_pb";
import { DozerFilter, DozerQuery } from "./query_helper";
import { HealthGrpcServiceClient } from "./generated/protos/HealthServiceClientPb";
import { HealthCheckResponse } from "./generated/protos/health_pb";
import { ClientReadableStream, Metadata } from "grpc-web";
/**
 * @deprecated
 * use DozerClientOptions instead
 */
export interface ApiClientOptions {
    serverAddress?: string;
    authToken?: string | null;
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
export declare class ApiClient {
    private readonly endpoint;
    private service;
    private healthService;
    private readonly authMetadata;
    constructor(endpoint: string, clientOptions?: ApiClientOptions);
    healthCheck(): Promise<HealthCheckResponse>;
    count(query?: DozerQuery | null): Promise<CountResponse>;
    query(query?: DozerQuery | null): Promise<[FieldDefinition[], Object[]]>;
    onEvent(eventType?: EventType, filter?: DozerFilter | null): ClientReadableStream<Operation>;
    getFields(): Promise<GetFieldsResponse>;
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
    typ: OperationType;
    old?: Object;
    new?: Object;
    newId?: number;
    endpointName: string;
}
export declare class DozerClient {
    options: DozerClientOptions;
    service: CommonGrpcServiceClient;
    healthService: HealthGrpcServiceClient;
    authMetadata: Metadata;
    constructor(options: DozerClientOptions);
    healthCheck(): Promise<HealthCheckResponse>;
    waitForHealthCheck(retry?: number): Promise<void>;
    getEndpoints(): Promise<import("./generated/protos/common_pb").GetEndpointsResponse>;
    getEndpoint(endpoint: string): DozerEndpoint;
}
export declare class DozerEndpoint {
    private endpoint;
    private client;
    constructor(endpoint: string, client: DozerClient);
    count(query?: DozerQuery): Promise<CountResponse>;
    query(query?: DozerQuery): Promise<[FieldDefinition[], Object[]]>;
    getFields(): Promise<GetFieldsResponse>;
    onEvent(callback: (evt: DozerEndpointEvent) => void, eventType?: EventType, filter?: DozerFilter): ClientReadableStream<Operation> | null;
}
