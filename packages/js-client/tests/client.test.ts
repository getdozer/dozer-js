import { DozerClient, DozerEndpoint, DozerEndpointEvent } from "../src/client";
import { CommonGrpcServiceClient } from "../src/generated/protos/CommonServiceClientPb";
import { HealthGrpcServiceClient } from "../src/generated/protos/HealthServiceClientPb";
import { expect, jest } from '@jest/globals';


import { EventType } from "../src/generated/protos/types_pb";
import { FilterOperator } from "../src/query_helper";


jest.mock("../src/generated/protos/CommonServiceClientPb", () => ({
    CommonGrpcServiceClient: jest.fn(),
}));

jest.mock("../src/generated/protos/HealthServiceClientPb");

beforeEach(() => {
    (CommonGrpcServiceClient as jest.Mock).mockClear();
    (HealthGrpcServiceClient as jest.Mock).mockClear();
});

describe('Client', () => {
    it('should instantialte classes', () => {
        new DozerEndpoint("test", new DozerClient({ "authToken": "test-token", "serverAddress": "server-address" }));
        expect(CommonGrpcServiceClient).toHaveBeenCalledWith("server-address", { "Authorization": "Bearer test-token" })
        expect(HealthGrpcServiceClient).toHaveBeenCalledWith("server-address", { "Authorization": "Bearer test-token" })
    });

    it('should subscribe onEvent', () => {

        const mockOnEvent = jest.fn(() => {
            return {
                on: jest.fn(),
            }
        });
        const mockedClient: any = jest.mocked(CommonGrpcServiceClient);
        mockedClient.mockImplementation(() => ({
            onEvent: mockOnEvent,
        }));

        const client = new DozerEndpoint("endpoint-name", new DozerClient({ "authToken": "test-token", "serverAddress": "server-address" }));;

        client.onEvent((evt: DozerEndpointEvent) => {
            console.log(evt);
        }, EventType.ALL);
        expect(mockOnEvent).toBeCalledWith({
            "wrappers_": {
                "1": {
                    "arr_": [],
                    "map_": {
                        "endpoint-name": {
                            "key": "endpoint-name",
                            "value": [
                                null
                            ],
                            "valueWrapper": {
                                "wrappers_": null,
                                "arrayIndexOffset_": -1,
                                "array": [
                                    null
                                ],
                                "messageId_": undefined,
                                "pivot_": expect.any(Number),
                                "convertedPrimitiveFields_": {}
                            }
                        }
                    },
                    "arrClean": false,
                    "valueCtor_": expect.any(Function),
                }
            },
            "arrayIndexOffset_": -1,
            "array": [
                []
            ],
            "messageId_": undefined,
            "pivot_": expect.any(Number),
            "convertedPrimitiveFields_": {}

        }, { "Authorization": "Bearer test-token" });

        mockOnEvent.mockClear();
        client.onEvent((evt: DozerEndpointEvent) => {
            console.log(evt);
        }, EventType.DELETE_ONLY, {
            id: {
                [FilterOperator.GT]: 100
            }
        });
        expect(mockOnEvent).toBeCalledWith({
            "wrappers_": {
                "1": {
                    "arr_": [],
                    "map_": {
                        "endpoint-name": {
                            "key": "endpoint-name",
                            "value": [
                                EventType.DELETE_ONLY,
                                ,
                                "{\"id\":{\"$gt\":100}}"
                            ],
                            "valueWrapper": {
                                "wrappers_": null,
                                "arrayIndexOffset_": -1,
                                "array": [
                                    EventType.DELETE_ONLY,
                                    ,
                                    "{\"id\":{\"$gt\":100}}"
                                ],
                                "messageId_": undefined,
                                "pivot_": expect.any(Number),
                                "convertedPrimitiveFields_": {}
                            }
                        }
                    },
                    "arrClean": false,
                    "valueCtor_": expect.any(Function),
                }
            },
            "arrayIndexOffset_": -1,
            "array": [
                []
            ],  
            "messageId_": undefined,
            "pivot_": expect.any(Number),
            "convertedPrimitiveFields_": {}
        }, { "Authorization": "Bearer test-token" });

    })
})