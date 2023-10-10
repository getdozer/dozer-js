import { DozerEndpoint, DozerQuery, Order } from '@dozerjs/dozer';
import { EventType, FieldDefinition } from '@dozerjs/dozer/lib/cjs/generated/protos/types_pb';
import { RecordMapper } from '@dozerjs/dozer/lib/cjs/helper';
import { Value } from '@dozerjs/dozer/src/generated/protos/types_pb';
import { expect, jest } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { fieldsMockData, recordMockData } from '../../js-client/tests/__mock__/common.data';
import { countMock, eventMock, fieldsMock, queryMock } from '../../js-client/tests/__mock__/common.mock';
import { DozerProvider } from '../src/context';
import { useDozerEndpoint, useDozerEndpointCount, useDozerEndpointFields, useDozerEndpointQuery } from '../src/useEndpoint';

jest.mock("@dozerjs/dozer/lib/cjs/generated/protos/CommonServiceClientPb", () => ({
    CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
        getFields: fieldsMock,
        count: countMock,
        query: queryMock,
        onEvent: eventMock,
    })),
}));

jest.spyOn(DozerEndpoint.prototype, 'getFields');
jest.spyOn(DozerEndpoint.prototype, 'query');
jest.spyOn(DozerEndpoint.prototype, 'count');
jest.spyOn(DozerEndpoint.prototype, 'onEvent');

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => (
    <DozerProvider value={{
        serverAddress: 'test-address',
    }}>{children}</DozerProvider>
);

const query: DozerQuery = {
    limit: 10,
    skip: 20,
    orderBy: {
        'test-field': Order.DESC,
    },
    filter: {
        'test-field': 'test-field',
    }
};

describe('useDozerEndpointFields', () => {
    it('should called correct', async () => {
        renderHook(() => useDozerEndpointFields('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => expect(DozerEndpoint.prototype.getFields).toBeCalled());
    });

    it('should return correct', async () => {
        const { result } = renderHook(() => useDozerEndpointFields('test-endpoint'), { wrapper: ProviderWrapper });;
        await waitFor(() => expect(result.current.fields?.map(item => item.toObject())).toEqual(fieldsMockData));
    });
});

describe('useDozerEndpointCount', () => {
    it('should called correct without query', async () => {
        renderHook(() => useDozerEndpointCount('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.count).toBeCalledWith(undefined);
            expect(DozerEndpoint.prototype.query).not.toBeCalled();
        });
    });

    it('should called correct without query', async () => {
        renderHook(() => useDozerEndpointCount('test-endpoint', { query }), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.count).toBeCalledWith(query);
            expect(DozerEndpoint.prototype.query).not.toBeCalled();
        });
    });

    it('should return correct', async () => {
        const { result } = renderHook(() => useDozerEndpointCount('test-endpoint'), { wrapper: ProviderWrapper });;
        await waitFor(() => expect(result.current.count).toBe(recordMockData.length));
    });
});

describe('useDozerEndpointQuery', () => {
    it('should called correct without query', async () => {
        renderHook(() => useDozerEndpointQuery('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.query).toBeCalledWith(undefined);
            expect(DozerEndpoint.prototype.count).not.toBeCalled();
        });
    });

    it('should called correct with query', async () => {
        renderHook(() => useDozerEndpointQuery('test-endpoint', { query }), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.query).toBeCalledWith(query);
            expect(DozerEndpoint.prototype.count).not.toBeCalled();
        });
    });

    it('should return correct', async () => {
        const { result } = renderHook(() => useDozerEndpointQuery('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => {
            const data = converMockDataToRecord(result.current.fields, recordMockData);
            expect(result.current.records).toEqual(data);
        });
    });
});

describe('useDozerEndpoint', () => {
    it('should called correct without watch', async () => {
        renderHook(() => useDozerEndpoint('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.query).toBeCalled();
            expect(DozerEndpoint.prototype.count).toBeCalled();
            expect(DozerEndpoint.prototype.onEvent).not.toBeCalled();
        });
    });

    it('should called correct with watch', async () => {
        renderHook(() => useDozerEndpoint('test-endpoint', { watch: EventType.ALL }), { wrapper: ProviderWrapper });
        await waitFor(() => {
            expect(DozerEndpoint.prototype.query).toBeCalled();
            expect(DozerEndpoint.prototype.count).toBeCalled();
            expect(DozerEndpoint.prototype.onEvent).toBeCalled();
        });
    });

    it('should return correct', async () => {
        const { result } = renderHook(() => useDozerEndpoint('test-endpoint'), { wrapper: ProviderWrapper });
        await waitFor(() => {
            const data = converMockDataToRecord(result.current.fields, recordMockData);
            expect(result.current.records).toEqual(data);
            expect(result.current.count).toBe(recordMockData.length);
        });
    });
});

function converMockDataToRecord(fields: FieldDefinition[] = [], data: any[] = []) {
    const mapper = new RecordMapper(fields);
    return data.map(v => {
        const values = v.record.values.map((item: any) => {
            const value = new Value();
            Object.keys(item).forEach(key => {
                const method = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
                value[method](item[key]);
            });
            return value;
        })
        return mapper.mapRecord(values);
    });
}