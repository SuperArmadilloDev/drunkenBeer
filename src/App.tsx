import React, { useEffect, useState } from 'react';
import './App.scss';

import { Beer } from './common/types';
import CustomGrid from './components/grid/CustomGrid';

function App() {
  const ROW_NB = 2;
  const COLS_NB = 3;

  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [perPageNb, setperPageNb] = useState(ROW_NB * COLS_NB);

  const next = () => {
    setcurrentPage(currentPage + 1);
  };

  const fetchBeerData = () => {
    fetch(
      `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPageNb}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBeers(data);
      });
  };

  useEffect(() => {
    fetchBeerData();
  });

  return (
    <div className='App px-3 pt-5'>
      <h1>Beer Catalog</h1>
      <CustomGrid data={beers} />
    </div>
  );
}

export default App;
