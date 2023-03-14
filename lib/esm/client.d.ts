import { EventType, FieldDefinition, Operation } from "./generated/protos/types_pb";
import { CountResponse, GetFieldsResponse } from "./generated/protos/common_pb";
import { DozerQuery } from "./query_helper";
import { HealthCheckResponse } from "./generated/protos/health_pb";
import { ClientReadableStream } from "grpc-web";
export declare class ApiClient {
    private readonly endpoint;
    private service;
    private healthService;
    constructor(endpoint: string, server_address?: string);
    healthCheck(): Promise<HealthCheckResponse>;
    count(query?: DozerQuery | null): Promise<CountResponse>;
    query(query?: DozerQuery | null): Promise<[FieldDefinition[], Object[]]>;
    onEvent(eventType?: EventType): ClientReadableStream<Operation>;
    getFields(): Promise<GetFieldsResponse>;
}
