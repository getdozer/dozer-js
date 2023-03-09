import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { EventType, FieldDefinition, Operation, RecordWithId } from "./types";
export declare const protobufPackage = "dozer.common";
/**
 * The _common_ gRPC API handles Pull and Push queries of all endpoints with a
 * single service, `CommonGrpcService`.
 */
/** Request for `count` and `query`. */
export interface QueryRequest {
    /** The name of the endpoint to query. */
    endpoint: string;
    /** JSON query string. */
    query?: string | undefined;
}
/** Response for `count`. */
export interface CountResponse {
    /** The number of records satisfying the query. */
    count: number;
}
/** Request for `OnEvent`. */
export interface OnEventRequest {
    /** The event type to subscribe to. */
    type: EventType;
    /** The name of the endpoint to subscribe to. */
    endpoint: string;
    /** JSON filter string. */
    filter?: string | undefined;
}
/** Request for `getFields`. */
export interface GetFieldsRequest {
    /** The endpoint name. */
    endpoint: string;
}
/** Response for `getFields`. */
export interface GetFieldsResponse {
    /** The list of indexes of the keys that are used as the primary index. */
    primaryIndex: number[];
    /** The list of field definitions. */
    fields: FieldDefinition[];
}
/** Response for `query`. */
export interface QueryResponse {
    /** The list of field definitions. */
    fields: FieldDefinition[];
    /** The list of record data. */
    records: RecordWithId[];
}
/** Request for `getEndpoints`. */
export interface GetEndpointsRequest {
}
/** Response for `getEndpoints`. */
export interface GetEndpointsResponse {
    /** List of endpoint names. */
    endpoints: string[];
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    create<I extends {
        endpoint?: string | undefined;
        query?: string | undefined;
    } & {
        endpoint?: string | undefined;
        query?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryRequest>]: never; }>(base?: I | undefined): QueryRequest;
    fromPartial<I_1 extends {
        endpoint?: string | undefined;
        query?: string | undefined;
    } & {
        endpoint?: string | undefined;
        query?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryRequest>]: never; }>(object: I_1): QueryRequest;
};
export declare const CountResponse: {
    encode(message: CountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse;
    fromJSON(object: any): CountResponse;
    toJSON(message: CountResponse): unknown;
    create<I extends {
        count?: number | undefined;
    } & {
        count?: number | undefined;
    } & { [K in Exclude<keyof I, "count">]: never; }>(base?: I | undefined): CountResponse;
    fromPartial<I_1 extends {
        count?: number | undefined;
    } & {
        count?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "count">]: never; }>(object: I_1): CountResponse;
};
export declare const OnEventRequest: {
    encode(message: OnEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnEventRequest;
    fromJSON(object: any): OnEventRequest;
    toJSON(message: OnEventRequest): unknown;
    create<I extends {
        type?: EventType | undefined;
        endpoint?: string | undefined;
        filter?: string | undefined;
    } & {
        type?: EventType | undefined;
        endpoint?: string | undefined;
        filter?: string | undefined;
    } & { [K in Exclude<keyof I, keyof OnEventRequest>]: never; }>(base?: I | undefined): OnEventRequest;
    fromPartial<I_1 extends {
        type?: EventType | undefined;
        endpoint?: string | undefined;
        filter?: string | undefined;
    } & {
        type?: EventType | undefined;
        endpoint?: string | undefined;
        filter?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof OnEventRequest>]: never; }>(object: I_1): OnEventRequest;
};
export declare const GetFieldsRequest: {
    encode(message: GetFieldsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldsRequest;
    fromJSON(object: any): GetFieldsRequest;
    toJSON(message: GetFieldsRequest): unknown;
    create<I extends {
        endpoint?: string | undefined;
    } & {
        endpoint?: string | undefined;
    } & { [K in Exclude<keyof I, "endpoint">]: never; }>(base?: I | undefined): GetFieldsRequest;
    fromPartial<I_1 extends {
        endpoint?: string | undefined;
    } & {
        endpoint?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "endpoint">]: never; }>(object: I_1): GetFieldsRequest;
};
export declare const GetFieldsResponse: {
    encode(message: GetFieldsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldsResponse;
    fromJSON(object: any): GetFieldsResponse;
    toJSON(message: GetFieldsResponse): unknown;
    create<I extends {
        primaryIndex?: number[] | undefined;
        fields?: {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
    } & {
        primaryIndex?: (number[] & number[] & { [K in Exclude<keyof I["primaryIndex"], keyof number[]>]: never; }) | undefined;
        fields?: ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_2 in Exclude<keyof I["fields"], keyof {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GetFieldsResponse>]: never; }>(base?: I | undefined): GetFieldsResponse;
    fromPartial<I_1 extends {
        primaryIndex?: number[] | undefined;
        fields?: {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
    } & {
        primaryIndex?: (number[] & number[] & { [K_4 in Exclude<keyof I_1["primaryIndex"], keyof number[]>]: never; }) | undefined;
        fields?: ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_6 in Exclude<keyof I_1["fields"], keyof {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof GetFieldsResponse>]: never; }>(object: I_1): GetFieldsResponse;
};
export declare const QueryResponse: {
    encode(message: QueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse;
    fromJSON(object: any): QueryResponse;
    toJSON(message: QueryResponse): unknown;
    create<I extends {
        fields?: {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
        records?: {
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        fields?: ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K in Exclude<keyof I["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_1 in Exclude<keyof I["fields"], keyof {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
        records?: ({
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[] & ({
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        } & {
            id?: number | undefined;
            record?: ({
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } & {
                values?: ({
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] & ({
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                } & {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: ({
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } & {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } & { [K_2 in Exclude<keyof I["records"][number]["record"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & { [K_3 in Exclude<keyof I["records"][number]["record"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["records"][number]["record"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_5 in Exclude<keyof I["records"][number]["record"]["values"], keyof {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                version?: number | undefined;
            } & { [K_6 in Exclude<keyof I["records"][number]["record"], keyof import("./types").Record>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["records"][number], keyof RecordWithId>]: never; })[] & { [K_8 in Exclude<keyof I["records"], keyof {
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof QueryResponse>]: never; }>(base?: I | undefined): QueryResponse;
    fromPartial<I_1 extends {
        fields?: {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] | undefined;
        records?: {
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        fields?: ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[] & ({
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        } & { [K_10 in Exclude<keyof I_1["fields"][number], keyof FieldDefinition>]: never; })[] & { [K_11 in Exclude<keyof I_1["fields"], keyof {
            typ?: import("./types").Type | undefined;
            name?: string | undefined;
            nullable?: boolean | undefined;
        }[]>]: never; }) | undefined;
        records?: ({
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[] & ({
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        } & {
            id?: number | undefined;
            record?: ({
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } & {
                values?: ({
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] & ({
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                } & {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: ({
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } & {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } & { [K_12 in Exclude<keyof I_1["records"][number]["record"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & { [K_13 in Exclude<keyof I_1["records"][number]["record"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I_1["records"][number]["record"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_15 in Exclude<keyof I_1["records"][number]["record"]["values"], keyof {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                version?: number | undefined;
            } & { [K_16 in Exclude<keyof I_1["records"][number]["record"], keyof import("./types").Record>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I_1["records"][number], keyof RecordWithId>]: never; })[] & { [K_18 in Exclude<keyof I_1["records"], keyof {
            id?: number | undefined;
            record?: {
                values?: {
                    uintValue?: number | undefined;
                    intValue?: number | undefined;
                    floatValue?: number | undefined;
                    boolValue?: boolean | undefined;
                    stringValue?: string | undefined;
                    bytesValue?: Uint8Array | undefined;
                    decimalValue?: {
                        flags?: number | undefined;
                        lo?: number | undefined;
                        mid?: number | undefined;
                        hi?: number | undefined;
                    } | undefined;
                    timestampValue?: Date | undefined;
                    dateValue?: string | undefined;
                    pointValue?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                }[] | undefined;
                version?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof QueryResponse>]: never; }>(object: I_1): QueryResponse;
};
export declare const GetEndpointsRequest: {
    encode(_: GetEndpointsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointsRequest;
    fromJSON(_: any): GetEndpointsRequest;
    toJSON(_: GetEndpointsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetEndpointsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetEndpointsRequest;
};
export declare const GetEndpointsResponse: {
    encode(message: GetEndpointsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointsResponse;
    fromJSON(object: any): GetEndpointsResponse;
    toJSON(message: GetEndpointsResponse): unknown;
    create<I extends {
        endpoints?: string[] | undefined;
    } & {
        endpoints?: (string[] & string[] & { [K in Exclude<keyof I["endpoints"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "endpoints">]: never; }>(base?: I | undefined): GetEndpointsResponse;
    fromPartial<I_1 extends {
        endpoints?: string[] | undefined;
    } & {
        endpoints?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["endpoints"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "endpoints">]: never; }>(object: I_1): GetEndpointsResponse;
};
/**
 * CommonGrpcService allows developers to query data from various endpoints.
 *
 * The service supports both Pull and Push queries. It provides methods to
 * return metadata about the fields that can be used to construct the data types
 * dynamically.
 *
 * This is preferred while working with libraries or in the case of dynamic
 * scenarios and interpreted languages.
 */
export interface CommonGrpcService {
    /**
     * Counts the number of records satisfying the given query. See
     * [Query](../query) for the query format.
     *
     * If no query is specified, total number of records will be returned.
     */
    count(request: QueryRequest): Promise<CountResponse>;
    /**
     * Performs query on an endpoint. See [Query](../query) for the query format.
     *
     * If no query is specified, the first 50 records will be returned.
     */
    query(request: QueryRequest): Promise<QueryResponse>;
    /**
     * Subscribes to the Dozer event stream, optionally applies a filter. See
     * [Query](../query) for the filter format.
     *
     * This API is unstable and may change in the future.
     */
    OnEvent(request: OnEventRequest): Observable<Operation>;
    /** Gets all the endpoints Dozer is currently serving. */
    getEndpoints(request: GetEndpointsRequest): Promise<GetEndpointsResponse>;
    /** Gets the field description of an endpoint. */
    getFields(request: GetFieldsRequest): Promise<GetFieldsResponse>;
}
export declare class CommonGrpcServiceClientImpl implements CommonGrpcService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    count(request: QueryRequest): Promise<CountResponse>;
    query(request: QueryRequest): Promise<QueryResponse>;
    OnEvent(request: OnEventRequest): Observable<Operation>;
    getEndpoints(request: GetEndpointsRequest): Promise<GetEndpointsResponse>;
    getFields(request: GetFieldsRequest): Promise<GetFieldsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
