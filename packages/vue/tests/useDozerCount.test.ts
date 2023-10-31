import { DozerEndpoint, DozerQuery, Order } from '@dozerjs/dozer';
import { countMock, eventMock, fieldsMock, onEventMock, queryMock, removeEventMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { waitFor } from '@testing-library/vue';
import { useDozerCount } from '../src/useDozerCount';
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

jest.spyOn(DozerEndpoint.prototype, 'count');
jest.spyOn(DozerEndpoint.prototype, 'onEvent');


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
    renderHook(() => useDozerCount('test-endpoint'));
    await waitFor(() => expect(DozerEndpoint.prototype.count).toBeCalledWith(undefined));

    renderHook(() => useDozerCount('test-endpoint', query));
    await waitFor(() => expect(DozerEndpoint.prototype.count).toBeCalledWith(query));
  });

  it('should return correct', async () => {

    const { result: { count, error } } = renderHook(() => useDozerCount('test-endpoint'));
    await waitFor(() => {
      expect(count.value).toStrictEqual(expect.any(Number));
      expect(error.value).toBeUndefined();
    });
  });

  it('should connect correct', async () => {
    const { result: { stream } } = renderHook(() => useDozerEvent([
      {
        endpoint: 'test-endpoint'
      }
    ]));
    const { result: { connect, consume, error } } = renderHook(() => useDozerCount('test-endpoint'));
    connect(stream.value);

    await waitFor(() => {
      expect(onEventMock).toBeCalledWith('data', consume);
      expect(error.value).toBeUndefined();
    });

    const { result: { stream: stream2 } } = renderHook(() => useDozerEvent([
      {
        endpoint: 'test-endpoint'
      }
    ]));

    connect(stream2.value);

    await waitFor(() => {
      expect(removeEventMock).toBeCalledWith('data', consume);
    })

  });

});
