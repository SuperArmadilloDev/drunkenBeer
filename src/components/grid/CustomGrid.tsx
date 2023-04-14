import { ReactNode } from 'react';
import { GridLayout } from '@progress/kendo-react-layout';
import { useBreakpoint } from 'use-breakpoint';

// Misc
import './CustomGrid.scss';

//Constants
import { GRID_CONFIG } from '../../constants/gridConfig';
import { BREAKPOINTS } from '../../constants/breakpoints';

interface Props {
  children: ReactNode;
}

const getGridConfig = (
  breakpoint: string | number,
  GRID_CONFIG: { [x: string]: any }
) => GRID_CONFIG[breakpoint];

const CustomGrid = ({ children }: Props) => {
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
          {children}
        </GridLayout>
      </div>
    </div>
  );
};

export default CustomGrid;
