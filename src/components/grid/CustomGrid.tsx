import { useState } from 'react';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import useBreakpoint from 'use-breakpoint';

// Misc
import './CustomGrid.scss';

//Compnents
import CustomCard from '../card/CustomCard';
import PageNavigation from '../pageNavigation/PageNavigation';

//Constants
import { GRID_CONFIG } from '../../constants/gridConfig';
import { BREAKPOINTS } from '../../constants/breakpoints';

//Hooks & contexts
import { UseFetchData } from '../../hooks';

const getGridConfig = (
  breakpoint: string | number,
  GRID_CONFIG: { [x: string]: any }
) => GRID_CONFIG[breakpoint];

const CustomGrid = () => {
  const ROW_NB = 2;
  const COLS_NB = 3;

  const [perPageNb] = useState(ROW_NB * COLS_NB);

  const [currPage, setCurrPage] = useState(1);

  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const { postsContainer } = getGridConfig(breakpoint, GRID_CONFIG);
  const [toggle, setToggle] = useState(false);

  const beers = UseFetchData(
    `https://api.punkapi.com/v2/beers?page=${currPage}&per_page=${perPageNb}${
      toggle ? '&abv_gt=8' : ''
    }`
  );

  console.log(beers);

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
      <div className='pb'>
        <GridLayout
          className='mb-2'
          gap={{ rows: 20, cols: 20 }}
          cols={postsContainer.cols}
        >
          {beers.map((beer) => {
            return (
              <GridLayoutItem key={beer.id}>
                <CustomCard data={beer} />
              </GridLayoutItem>
            );
          })}
        </GridLayout>
        <PageNavigation
          updatePage={updatePage}
          className='fixed-bottom'
        />
      </div>
    </div>
  ) : (
    <div>
      <h1 className='text-center'>Oh no!</h1>
      <p className='text-center'>an error occured</p>
    </div>
  );
};

export default CustomGrid;
