import { ReactNode } from 'react';
import { GridLayout } from '@progress/kendo-react-layout';
import useBreakpoint from 'use-breakpoint';

// Misc
import './CustomGrid.scss';

//Constants
import { GRID_CONFIG } from '../../constants/gridConfig';
import { BREAKPOINTS } from '../../constants/breakpoints';

interface Props {
  gridData: ReactNode;
}

const getGridConfig = (
  breakpoint: string | number,
  GRID_CONFIG: { [x: string]: any }
) => GRID_CONFIG[breakpoint];

const CustomGrid = (props: Props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const { postsContainer } = getGridConfig(breakpoint, GRID_CONFIG);

  return (
    <div>
      <div className='pb'>
        <GridLayout
          className='mb-2'
          gap={{ rows: 20, cols: 20 }}
          cols={postsContainer.cols}
        >
          {props.gridData}
        </GridLayout>
      </div>
    </div>
  );
};

export default CustomGrid;
