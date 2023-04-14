import { useEffect, useState } from 'react';

import { Beer } from '../common/types';

const useFetchData = (url: string) => {
  const [data, setData] = useState<Beer[]>([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.error(error);
      setData([]);
    }
  }, [url]);

  return data;
};

export default useFetchData;
