import './Home.scss';

import { CustomCard, CustomGrid, PageNavigation } from '../../components';
import { UseFetchData } from '../../hooks';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { useState } from 'react';
import { GridLayoutItem } from '@progress/kendo-react-layout';

function Home() {
  const ROW_NB = 2;
  const COLS_NB = 3;

  const [currPage, setCurrPage] = useState(1);
  const [perPageNb] = useState(ROW_NB * COLS_NB);

  const [toggle, setToggle] = useState(false);

  const beers = UseFetchData(
    `https://api.punkapi.com/v2/beers?page=${currPage}&per_page=${perPageNb}${
      toggle ? '&abv_gt=8' : ''
    }`
  );

  const updatePage = (nb: number) => {
    setCurrPage(nb);
  };

  const changeFilter = (event: SwitchChangeEvent) => {
    setToggle(event.target.value);
  };

  return beers.length ? (
    <div>
      <div className='d-flex justify-content-end align-items-center border-bottom border-dark margin-filter'>
        <div className='d-flex gap-3'>
          <h5>Show me your strongest beers!</h5>
          <Switch
            value={toggle}
            onChange={changeFilter}
          />
        </div>
      </div>
      <CustomGrid
        gridData={beers.map((data) => {
          return (
            <GridLayoutItem key={data.id}>
              <CustomCard
                image={data.image_url}
                title={data.name}
                subtitle={data.tagline}
                addInfSub={`ABV: ${data.abv}%`}
                description={data.description}
              />
            </GridLayoutItem>
          );
        })}
      />
      <PageNavigation
        updatePage={updatePage}
        className='fixed-bottom'
      />
    </div>
  ) : (
    <div>
      <h1 className='text-center'>Oh no!</h1>
      <p className='text-center'>an error occured</p>
    </div>
  );
}
export default Home;
