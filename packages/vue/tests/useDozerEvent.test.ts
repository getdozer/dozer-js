import { DozerClient, types_pb } from '@dozerjs/dozer';
import { cancelEventMock, countMock, eventMock, fieldsMock, onEventMock, queryMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { cleanup, waitFor } from '@testing-library/vue';
import { useDozerEvent } from '../src/useDozerEvent';
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
    eventType: types_pb.EventType.ALL
  },
  {
    endpoint: 'test-endpoint-2',
  },
];

describe('useDozerEvent', () => {

  it('should called correct', async () => {
    renderHook(() => useDozerEvent(options));
    await waitFor(() => {
      expect(DozerClient.prototype.onEvent).toBeCalledWith(options);
      expect(onEventMock).toBeCalledWith('error', expect.any(Function));
    });
  });

  it('should cancel if unmount', async () => {
    renderHook(() => useDozerEvent(options));
    cleanup();
    await waitFor(() => {
      expect(cancelEventMock).toBeCalled();
    });
  });

  it('should share connection', async () => {
    renderHook(() => useDozerEvent(options));
    await waitFor(() => {
      expect(eventMock).toBeCalledTimes(1);
    });
  });
});
