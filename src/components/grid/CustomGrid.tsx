import { useState } from 'react';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import useBreakpoint from 'use-breakpoint';
import { GRID_CONFIG } from '../../constants/gridConfig';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Beer } from '../../common/types';

import CustomCard from '../card/CustomCard';
import PageNavigation from '../pageNavigation/PageNavigation';

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
  const { postsContainer, featuredOrientation } = getGridConfig(
    breakpoint,
    GRID_CONFIG
  );

  const data = props.data;

  return (
    <div>
      <GridLayout
        gap={{ rows: 20, cols: 20 }}
        cols={postsContainer.cols}
      >
        {data.map((beer, idx) => {
          return (
            <GridLayoutItem key={beer.id}>
              <CustomCard data={beer} />
            </GridLayoutItem>
          );
        })}
      </GridLayout>
      <PageNavigation />
    </div>
  );
};

export default CustomGrid;

// <Card className='h-100'>
//   {beer.image_url !== undefined && (
//     <div className='d-flex justify-content-center border-bottom border-dark p-3'>
//       <CardImage
//         className='img-fluid cimg'
//         src={beer.image_url}
//       />
//     </div>
//   )}
//   <div>
//     <CardHeader>
//       <CardTitle>{beer.name}</CardTitle>
//       <CardSubtitle>
//         <div className='d-flex justify-content-between'>
//           <div>{beer.tagline}</div>
//           <div>ABV: {beer.abv}%</div>
//         </div>
//       </CardSubtitle>
//     </CardHeader>
//     <CardBody>{beer.description}</CardBody>
//   </div>
// </Card>
