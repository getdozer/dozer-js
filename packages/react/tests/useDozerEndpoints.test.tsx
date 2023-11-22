import { DozerClient, types_pb } from '@dozerjs/dozer';
import { cancelEventMock, countMock, eventMock, fieldsMock, onEventMock, queryMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { DozerProvider } from '../src/context';
import { useDozerEndpoints } from '../src/useDozerEndpoints';

jest.mock("@dozerjs/dozer/lib/cjs/generated/protos/CommonServiceClientPb", () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getFields: fieldsMock,
    count: countMock,
    query: queryMock,
    onEvent: eventMock,
  })),
}));

jest.spyOn(DozerClient.prototype, 'onEvent');

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <DozerProvider value={{
    serverAddress: 'test-address',
  }}>{children}</DozerProvider>
);

const options = [
  {
    endpoint: 'test-endpoint-1',
    eventType: types_pb.EventType.ALL,
    filter: {
      'col': 'testcol',
    }
  },
  {
    endpoint: 'test-endpoint-2',
  },
];

describe('useDozerEndpoints', () => {
  it('should called correct', async () => {
    renderHook(() => useDozerEndpoints(options), { wrapper: ProviderWrapper });
    await waitFor(() => {
      expect(queryMock).toBeCalledTimes(options.length);
      expect(onEventMock).toBeCalledWith('error', expect.any(Function));
    });
  });

  it('should cancel if unmount', async () => {
    const { unmount } = renderHook(() => useDozerEndpoints(options), { wrapper: ProviderWrapper });
    unmount();
    await waitFor(() => {
      expect(cancelEventMock).toBeCalled();
    });
  });

  it('should return correct', async () => {
    const { result } = renderHook(() => useDozerEndpoints(options), { wrapper: ProviderWrapper });
    await waitFor(() => {
      expect(result.current).toStrictEqual(expect.any(Array));
      expect(result.current.length).toBe(options.length);
    });
  });

  it('should share connection', async () => {
    renderHook(() => useDozerEndpoints(options), { wrapper: ProviderWrapper });
    await waitFor(() => {
      expect(eventMock).toBeCalledTimes(1);
    });
  });
});
