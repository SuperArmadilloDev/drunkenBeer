import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
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

  // const handleClick = React.useCallback(() => {
  //   window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={kendoka} className="App-logo" alt="kendoka" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <Button
  //         themeColor={'primary'}
  //         size={"large"}
  //         onClick={handleClick}
  //       >
  //         Learn KendoReact
  //       </Button>
  //     </header>
  //   </div>
  // );
}

export default App;
