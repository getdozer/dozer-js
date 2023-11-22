import { DozerEndpoint, DozerQuery, Order } from '@dozerjs/dozer';
import { countMock, eventMock, fieldsMock, onEventMock, queryMock, removeEventMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { DozerProvider } from '../src/context';
import { useDozerEvent } from '../src/useDozerEvent';
import { useDozerQuery } from '../src/useDozerQuery';

jest.mock("@dozerjs/dozer/lib/cjs/generated/protos/CommonServiceClientPb", () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getFields: fieldsMock,
    count: countMock,
    query: queryMock,
    onEvent: eventMock,
  })),
}));

jest.spyOn(DozerEndpoint.prototype, 'query');
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

describe('useDozerQuery', () => {
  it('should called correct', async () => {
    renderHook(() => useDozerQuery('test-endpoint'), { wrapper: ProviderWrapper });
    await waitFor(() => expect(DozerEndpoint.prototype.query).toBeCalled());

    renderHook(() => useDozerQuery('test-endpoint', query), { wrapper: ProviderWrapper });
    await waitFor(() => expect(DozerEndpoint.prototype.query).toBeCalledWith(query));
  });

  it('should return correct', async () => {
    const { result } = renderHook(() => useDozerQuery('test-endpoint'), { wrapper: ProviderWrapper });
    await waitFor(() => {
      expect(result.current.records).toStrictEqual(expect.any(Array));
      expect(result.current.error).toBeUndefined();
    });
  });

  it('should connect correct', async () => {
    const { result } = renderHook(() => useDozerQuery('test-endpoint'), { wrapper: ProviderWrapper });
    const { result: eventResult } = renderHook(() => useDozerEvent([
      {
        endpoint: 'test-endpoint'
      }
    ]), { wrapper: ProviderWrapper });

    result.current.connect(eventResult.current.stream);

    await waitFor(() => {
      expect(onEventMock).toBeCalledWith('data', result.current.consume);
      expect(removeEventMock).toBeCalledWith('data', result.current.consume);
      expect(result.current.error).toBeUndefined();
    });
  });
});
