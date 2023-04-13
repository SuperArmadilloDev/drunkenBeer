import { Beer } from '../../common/types';

import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
  CardSubtitle,
  CardTitle,
} from '@progress/kendo-react-layout';

import './CustomCard.scss';

interface Props {
  data: Beer;
}
const CustomCard = (props: Props) => {
  const data = props.data;

  return (
    <Card className='h-100 custom-card'>
      {data.image_url && (
        <div className='d-flex justify-content-center border-bottom border-dark p-3 image-div'>
          <CardImage
            className='img-fluid cimg'
            src={data.image_url}
          />
        </div>
      )}
      <div>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardSubtitle>
            <div className='d-flex justify-content-between'>
              <div>{data.tagline}</div>
              <div>ABV: {data.abv}%</div>
            </div>
          </CardSubtitle>
        </CardHeader>
        <CardBody>{data.description}</CardBody>
      </div>
    </Card>
  );
};

export default CustomCard;
