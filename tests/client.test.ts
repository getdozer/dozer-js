import { ApiClient } from "../src/client";
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
        new ApiClient("test", { "authToken": "test-token", "serverAddress": "server-address" });
        expect(CommonGrpcServiceClient).toHaveBeenCalledWith("server-address", { "Authorization": "Bearer test-token" })
        expect(HealthGrpcServiceClient).toHaveBeenCalledWith("server-address", { "Authorization": "Bearer test-token" })
    });

    it('should subscribe onEvent', () => {

        const mockOnEvent = jest.fn();
        const mockedClient: any = jest.mocked(CommonGrpcServiceClient);
        mockedClient.mockImplementation(() => ({
            onEvent: mockOnEvent,
        }));

        const client = new ApiClient("endpoint-name", { "authToken": "test-token", "serverAddress": "server-address" });

        client.onEvent(EventType.ALL);
        expect(mockOnEvent).toBeCalledWith({
            "array": [null, "endpoint-name"],
            "arrayIndexOffset_": -1,
            "convertedPrimitiveFields_": {},
            "messageId_": undefined,
            "pivot_": expect.any(Number),
            "wrappers_": null
        }, { "Authorization": "Bearer test-token" });

        mockOnEvent.mockClear();
        client.onEvent(EventType.DELETE_ONLY, {
            id: {
                [FilterOperator.GT]: 100
            }
        });
        expect(mockOnEvent).toBeCalledWith({
            "array": [
                EventType.DELETE_ONLY,
                "endpoint-name",
                "{\"id\":{\"$gt\":100}}"
            ],
            "arrayIndexOffset_": -1,
            "convertedPrimitiveFields_": {},
            "messageId_": undefined,
            "pivot_": expect.any(Number),
            "wrappers_": null
        }, { "Authorization": "Bearer test-token" });

    })
})