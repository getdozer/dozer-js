import { DozerEndpoint, DozerQuery, Order } from '@dozerjs/dozer';
import { countMock, eventMock, fieldsMock, onEventMock, queryMock, removeEventMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { DozerProvider } from '../src/context';
import { useDozerCount } from '../src/useDozerCount';
import { useDozerEvent } from '../src/useDozerEvent';

jest.mock("@dozerjs/dozer/lib/cjs/generated/protos/CommonServiceClientPb", () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getFields: fieldsMock,
    count: countMock,
    query: queryMock,
    onEvent: eventMock,
  })),
}));

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

describe('useDozerCount', () => {
  it('should called correct', async () => {
    renderHook(() => useDozerCount('test-endpoint'), { wrapper: ProviderWrapper });
    await waitFor(() => expect(DozerEndpoint.prototype.count).toBeCalled());

    renderHook(() => useDozerCount('test-endpoint', query), { wrapper: ProviderWrapper });
    await waitFor(() => expect(DozerEndpoint.prototype.count).toBeCalledWith(query));
  });

  it('should return correct', async () => {
    const { result } = renderHook(() => useDozerCount('test-endpoint'), { wrapper: ProviderWrapper });
    await waitFor(() => {
      expect(result.current.count).toStrictEqual(expect.any(Number));
      expect(result.current.error).toBeUndefined();
    });
  });

  it('should connect correct', async () => {
    const { result } = renderHook(() => useDozerCount('test-endpoint'), { wrapper: ProviderWrapper });
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
