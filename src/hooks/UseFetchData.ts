import { useEffect, useState } from 'react';

import { Beer } from '../common/types';

const useFetchData = (url: string) => {
  const [data, setData] = useState<Beer[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default useFetchData;
