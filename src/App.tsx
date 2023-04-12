import React, { useEffect, useState } from 'react';
import './App.scss';
import { Beer } from './common/types';

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const fetchBeerData = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBeers(data);
      });
  };

  useEffect(() => {
    fetchBeerData();
  }, []);

  return (
    <div className='App'>
      <h1>Beer Names to test</h1>
      <ul>
        {beers.map((beers) => (
          <li>{beers.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
