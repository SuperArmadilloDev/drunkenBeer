import { renderHook } from '@testing-library/react';
import { UseFetchData } from '../hooks/';

const BASE_URL = 'https://api.punkapi.com/v2/beers';

describe('useFetchData Tests', () => {
  test('should get a beer', () => {
    const {
      result: {
        current: [beer],
      },
    } = renderHook(() => UseFetchData(`${BASE_URL}/1`));

    expect(beer).toBe('1');
  });

  test('should get a table of 10 beers', () => {
    const {
      result: { current },
    } = renderHook(() => UseFetchData(`${BASE_URL}?page=1&per_page=10`));

    expect(current.length).toBe('10');
  });
});

export {};
