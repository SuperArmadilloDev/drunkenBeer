import { useState, useEffect } from 'react';
import {
  GridLayout,
  GridLayoutItem,
  StackLayout,
} from '@progress/kendo-react-layout';
import useBreakpoint from 'use-breakpoint';
// import styles from './BlogPosts.module.css';
import { GRID_CONFIG } from '../constants/gridConfig';
import { BREAKPOINTS } from '../constants/breakpoints';
import { Beer } from '../common/types';

const getGridConfig = (
  breakpoint: string | number,
  GRID_CONFIG: { [x: string]: any }
) => GRID_CONFIG[breakpoint];

interface Props {
  data: Beer[];
}

const CustomGrid = (props: Props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const [posts, setPosts] = useState([]);
  const {
    outerGrid,
    mainContainer,
    featuredContainer,
    postsContainer,
    postItem,
    featuredOrientation,
  } = getGridConfig(breakpoint, GRID_CONFIG);

  const data = props.data;

  return (
    <div>
      <GridLayout
        gap={{ rows: 20, cols: 20 }}
        cols={postsContainer.cols}
      >
        {data.map((beer, idx) => {
          const row = Math.floor(idx / postItem.divider) + 1;
          return (
            <GridLayoutItem
              className='bg-primary'
              key={beer.id}
              row={row}
              col={(idx % postItem.divider) + 1}
            >
              <p>{beer.name}</p>
            </GridLayoutItem>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default CustomGrid;
