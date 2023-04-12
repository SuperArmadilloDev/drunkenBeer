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
import useFetchData from '../../hooks/UseFetchData';

interface Props {
  toggle: boolean;
}

const getGridConfig = (
  breakpoint: string | number,
  GRID_CONFIG: { [x: string]: any }
) => GRID_CONFIG[breakpoint];

const CustomGrid = (props: Props) => {
  const ROW_NB = 2;
  const COLS_NB = 3;

  const [perPageNb] = useState(ROW_NB * COLS_NB);

  const [currPage, setCurrPage] = useState(1);

  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const { postsContainer } = getGridConfig(breakpoint, GRID_CONFIG);

  const beers = useFetchData(
    `https://api.punkapi.com/v2/beers?page=${currPage}&per_page=${perPageNb}${
      props.toggle ? '&abv_gt=8' : ''
    }`
  );

  const updatePage = (nb: number) => {
    setCurrPage(nb);
  };

  return (
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
  );
};

export default CustomGrid;
