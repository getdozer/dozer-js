/// <reference types="grpc-web" />
import { EventType } from "./generated/protos/types_pb";
import { DozerQuery } from "./query_helper";
export declare class ApiClient {
    private readonly endpoint;
    private service;
    constructor(endpoint: string, server_address?: string);
    count(query?: DozerQuery | null): Promise<import("./generated/protos/common_pb").CountResponse>;
    query(query?: DozerQuery | null): Promise<Object[][]>;
    onEvent(eventType?: EventType): import("grpc-web").ClientReadableStream<import("./generated/protos/types_pb").Operation>;
    getFields(): Promise<import("./generated/protos/common_pb").GetFieldsResponse>;
}
