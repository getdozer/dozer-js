import { DozerClient, types_pb } from '@dozerjs/dozer';
import { cancelEventMock, countMock, eventMock, fieldsMock, onEventMock, queryMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { cleanup, waitFor } from '@testing-library/vue';
import { useDozerEndpoints } from '../src/useDozerEndpoints';
import { renderHook } from './renderHook';

jest.mock("@dozerjs/dozer/lib/cjs/generated/protos/CommonServiceClientPb", () => ({
  CommonGrpcServiceClient: jest.fn().mockImplementation(() => ({
    getFields: fieldsMock,
    count: countMock,
    query: queryMock,
    onEvent: eventMock,
  })),
}));

jest.spyOn(DozerClient.prototype, 'onEvent');


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
    renderHook(() => useDozerEndpoints(options));
    await waitFor(() => {
      expect(queryMock).toBeCalledTimes(options.length);
      expect(onEventMock).toBeCalledWith('error', expect.any(Function));
    });
  });

  it('should cancel if unmount', async () => {
    renderHook(() => useDozerEndpoints(options));
    cleanup();
    await waitFor(() => {
      expect(cancelEventMock).toBeCalled();
    });
  });

  it('should return correct', async () => {
    const { result } = renderHook(() => useDozerEndpoints(options));
    await waitFor(() => {
      expect(result.value).toStrictEqual(expect.any(Array));
      expect(result.value.length).toBe(options.length);
    });
  });

  it('should share connection', async () => {
    renderHook(() => useDozerEndpoints(options));
    await waitFor(() => {
      expect(eventMock).toBeCalledTimes(1);
    });
  });
});
