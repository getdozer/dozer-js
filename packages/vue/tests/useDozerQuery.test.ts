import { DozerEndpoint, DozerQuery, Order } from '@dozerjs/dozer';
import { countMock, eventMock, fieldsMock, onEventMock, queryMock, removeEventMock } from '@dozerjs/dozer/tests/__mock__/common.mock';
import { waitFor } from '@testing-library/vue';
import { useDozerQuery } from '../src/useDozerQuery';
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

jest.spyOn(DozerEndpoint.prototype, 'query');
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

describe('useDozerQuery', () => {

  it('should called correct', async () => {
    renderHook(() => useDozerQuery('test-endpoint'));
    await waitFor(() => expect(DozerEndpoint.prototype.query).toBeCalledWith(undefined));

    renderHook(() => useDozerQuery('test-endpoint', query));
    await waitFor(() => expect(DozerEndpoint.prototype.query).toBeCalledWith(query));
  });

  it('should return correct', async () => {

    const { result: { records, error } } = renderHook(() => useDozerQuery('test-endpoint'));
    await waitFor(() => {
      expect(records.value).toStrictEqual(expect.any(Array));
      expect(error.value).toBeUndefined();
    });
  });

  it('should connect correct', async () => {
    const { result: { stream } } = renderHook(() => useDozerEvent([
      {
        endpoint: 'test-endpoint'
      }
    ]));
    const { result: { connect, consume, error } } = renderHook(() => useDozerQuery('test-endpoint'));
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
