import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
  GridLayout,
  GridLayoutColumnProps,
  GridLayoutItem,
  GridLayoutRowProps,
} from '@progress/kendo-react-layout';
import kendoka from './kendoka.svg';
import './App.scss';

import { Beer } from './common/types';
import CustomGrid from './components/CustomGrid';

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [perPageNb, setperPageNb] = useState(3 * 4);

  // const rows: GridLayoutRowProps[] = Array(3).fill({ height: 60 });
  const rows: GridLayoutRowProps[] = Array(3).fill({ height: 60 });
  const cols: GridLayoutColumnProps[] = Array(4).fill({ width: '20%' });

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
  }, []);

  return (
    <div className='App'>
      <h1>Beer Names to test</h1>
      <CustomGrid data={beers}></CustomGrid>
      {/* <GridLayout
        className='w-100'
        rows={rows}
        cols={cols}
        gap={{ rows: 5, cols: 5 }}
      >
        {beers.map((beer) => (
          <GridLayoutItem
            className='bg-primary'
            key={beer.id}
          >
            {beer.name}
          </GridLayoutItem>
        ))}
      </GridLayout> */}
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
