import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { OperationType as OperationType1, Record } from "./types";
export declare const protobufPackage = "dozer.ingest";
/** The event types. */
export declare enum OperationType {
    /** INSERT - INSERT operation. */
    INSERT = 0,
    /** DELETE - DELETE operation. */
    DELETE = 1,
    /** UPDATE - UPDATE operation. */
    UPDATE = 2,
    UNRECOGNIZED = -1
}
export declare function operationTypeFromJSON(object: any): OperationType;
export declare function operationTypeToJSON(object: OperationType): string;
export interface IngestRequest {
    schemaName: string;
    /** The operation type. */
    typ: OperationType1;
    /** Old record data, only applicable for UPDATE type. */
    old?: Record | undefined;
    /** New record data. */
    new: Record | undefined;
    seqNo: number;
}
export interface IngestResponse {
    seqNo: number;
}
export interface IngestArrowRequest {
    schemaName: string;
    /** Old record data, only applicable for UPDATE type. */
    records: Uint8Array;
    seqNo: number;
    metadata: {
        [key: number]: IngestMetadata;
    };
}
export interface IngestArrowRequest_MetadataEntry {
    key: number;
    value: IngestMetadata | undefined;
}
export interface IngestMetadata {
    /** The operation type. */
    typ: OperationType;
    /** Records with same primary key will have increasing version. */
    version: number;
}
export declare const IngestRequest: {
    encode(message: IngestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IngestRequest;
    fromJSON(object: any): IngestRequest;
    toJSON(message: IngestRequest): unknown;
    create<I extends {
        schemaName?: string | undefined;
        typ?: OperationType1 | undefined;
        old?: {
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
        new?: {
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
        seqNo?: number | undefined;
    } & {
        schemaName?: string | undefined;
        typ?: OperationType1 | undefined;
        old?: ({
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
                } & { [K in Exclude<keyof I["old"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_1 in Exclude<keyof I["old"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["old"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_3 in Exclude<keyof I["old"]["values"], keyof {
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
        } & { [K_4 in Exclude<keyof I["old"], keyof Record>]: never; }) | undefined;
        new?: ({
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
                } & { [K_5 in Exclude<keyof I["new"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_6 in Exclude<keyof I["new"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["new"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_8 in Exclude<keyof I["new"]["values"], keyof {
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
        } & { [K_9 in Exclude<keyof I["new"], keyof Record>]: never; }) | undefined;
        seqNo?: number | undefined;
    } & { [K_10 in Exclude<keyof I, keyof IngestRequest>]: never; }>(base?: I | undefined): IngestRequest;
    fromPartial<I_1 extends {
        schemaName?: string | undefined;
        typ?: OperationType1 | undefined;
        old?: {
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
        new?: {
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
        seqNo?: number | undefined;
    } & {
        schemaName?: string | undefined;
        typ?: OperationType1 | undefined;
        old?: ({
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
                } & { [K_11 in Exclude<keyof I_1["old"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_12 in Exclude<keyof I_1["old"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["old"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_14 in Exclude<keyof I_1["old"]["values"], keyof {
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
        } & { [K_15 in Exclude<keyof I_1["old"], keyof Record>]: never; }) | undefined;
        new?: ({
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
                } & { [K_16 in Exclude<keyof I_1["new"]["values"][number]["decimalValue"], keyof import("./types").RustDecimal>]: never; }) | undefined;
                timestampValue?: Date | undefined;
                dateValue?: string | undefined;
                pointValue?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & { [K_17 in Exclude<keyof I_1["new"]["values"][number]["pointValue"], keyof import("./types").PointType>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I_1["new"]["values"][number], keyof import("./types").Value>]: never; })[] & { [K_19 in Exclude<keyof I_1["new"]["values"], keyof {
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
        } & { [K_20 in Exclude<keyof I_1["new"], keyof Record>]: never; }) | undefined;
        seqNo?: number | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof IngestRequest>]: never; }>(object: I_1): IngestRequest;
};
export declare const IngestResponse: {
    encode(message: IngestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IngestResponse;
    fromJSON(object: any): IngestResponse;
    toJSON(message: IngestResponse): unknown;
    create<I extends {
        seqNo?: number | undefined;
    } & {
        seqNo?: number | undefined;
    } & { [K in Exclude<keyof I, "seqNo">]: never; }>(base?: I | undefined): IngestResponse;
    fromPartial<I_1 extends {
        seqNo?: number | undefined;
    } & {
        seqNo?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "seqNo">]: never; }>(object: I_1): IngestResponse;
};
export declare const IngestArrowRequest: {
    encode(message: IngestArrowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IngestArrowRequest;
    fromJSON(object: any): IngestArrowRequest;
    toJSON(message: IngestArrowRequest): unknown;
    create<I extends {
        schemaName?: string | undefined;
        records?: Uint8Array | undefined;
        seqNo?: number | undefined;
        metadata?: {
            [x: number]: {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        schemaName?: string | undefined;
        records?: Uint8Array | undefined;
        seqNo?: number | undefined;
        metadata?: ({
            [x: number]: {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } | undefined;
        } & {
            [x: number]: ({
                typ?: OperationType | undefined;
                version?: number | undefined;
            } & {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } & { [K in Exclude<keyof I["metadata"][number], keyof IngestMetadata>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["metadata"], number>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof IngestArrowRequest>]: never; }>(base?: I | undefined): IngestArrowRequest;
    fromPartial<I_1 extends {
        schemaName?: string | undefined;
        records?: Uint8Array | undefined;
        seqNo?: number | undefined;
        metadata?: {
            [x: number]: {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        schemaName?: string | undefined;
        records?: Uint8Array | undefined;
        seqNo?: number | undefined;
        metadata?: ({
            [x: number]: {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } | undefined;
        } & {
            [x: number]: ({
                typ?: OperationType | undefined;
                version?: number | undefined;
            } & {
                typ?: OperationType | undefined;
                version?: number | undefined;
            } & { [K_3 in Exclude<keyof I_1["metadata"][number], keyof IngestMetadata>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["metadata"], number>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof IngestArrowRequest>]: never; }>(object: I_1): IngestArrowRequest;
};
export declare const IngestArrowRequest_MetadataEntry: {
    encode(message: IngestArrowRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IngestArrowRequest_MetadataEntry;
    fromJSON(object: any): IngestArrowRequest_MetadataEntry;
    toJSON(message: IngestArrowRequest_MetadataEntry): unknown;
    create<I extends {
        key?: number | undefined;
        value?: {
            typ?: OperationType | undefined;
            version?: number | undefined;
        } | undefined;
    } & {
        key?: number | undefined;
        value?: ({
            typ?: OperationType | undefined;
            version?: number | undefined;
        } & {
            typ?: OperationType | undefined;
            version?: number | undefined;
        } & { [K in Exclude<keyof I["value"], keyof IngestMetadata>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof IngestArrowRequest_MetadataEntry>]: never; }>(base?: I | undefined): IngestArrowRequest_MetadataEntry;
    fromPartial<I_1 extends {
        key?: number | undefined;
        value?: {
            typ?: OperationType | undefined;
            version?: number | undefined;
        } | undefined;
    } & {
        key?: number | undefined;
        value?: ({
            typ?: OperationType | undefined;
            version?: number | undefined;
        } & {
            typ?: OperationType | undefined;
            version?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], keyof IngestMetadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof IngestArrowRequest_MetadataEntry>]: never; }>(object: I_1): IngestArrowRequest_MetadataEntry;
};
export declare const IngestMetadata: {
    encode(message: IngestMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IngestMetadata;
    fromJSON(object: any): IngestMetadata;
    toJSON(message: IngestMetadata): unknown;
    create<I extends {
        typ?: OperationType | undefined;
        version?: number | undefined;
    } & {
        typ?: OperationType | undefined;
        version?: number | undefined;
    } & { [K in Exclude<keyof I, keyof IngestMetadata>]: never; }>(base?: I | undefined): IngestMetadata;
    fromPartial<I_1 extends {
        typ?: OperationType | undefined;
        version?: number | undefined;
    } & {
        typ?: OperationType | undefined;
        version?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof IngestMetadata>]: never; }>(object: I_1): IngestMetadata;
};
export interface IngestService {
    ingest(request: IngestRequest): Promise<IngestResponse>;
    ingest_stream(request: Observable<IngestRequest>): Promise<IngestResponse>;
    ingest_arrow(request: IngestArrowRequest): Promise<IngestResponse>;
    ingest_arrow_stream(request: Observable<IngestArrowRequest>): Promise<IngestResponse>;
}
export declare class IngestServiceClientImpl implements IngestService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    ingest(request: IngestRequest): Promise<IngestResponse>;
    ingest_stream(request: Observable<IngestRequest>): Promise<IngestResponse>;
    ingest_arrow(request: IngestArrowRequest): Promise<IngestResponse>;
    ingest_arrow_stream(request: Observable<IngestArrowRequest>): Promise<IngestResponse>;
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
