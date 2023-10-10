import { DozerClient, DozerClientOptions } from "@dozerjs/dozer";
import { expect, jest } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import { useDozerClient } from '../src/useDozerClient';


jest.mock('@dozerjs/dozer');

describe('useDozerClient', () => {
    beforeEach(() => {
        (DozerClient as jest.Mock).mockClear();
    });
    it('should instantialte correct with options', () => {
        const options: DozerClientOptions = {
            serverAddress: 'test-address',
            authToken: 'test-token',
        };
        renderHook(() => useDozerClient(options));
        expect(DozerClient).toHaveBeenCalledWith(options);
    });

    it('should instantialte correct without options', () => {
        renderHook(() => useDozerClient());
        expect(DozerClient).toHaveBeenCalledWith({
            serverAddress: 'http://localhost:50051',
        });
    });
});