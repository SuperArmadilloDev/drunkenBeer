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
  image?: string;
  title: string;
  subtitle?: string;
  addInfSub?: string;
  description?: string;
}
const CustomCard = (props: Props) => {
  return (
    <Card className='h-100 custom-card'>
      {props.image && (
        <div className='d-flex justify-content-center border-bottom border-dark p-3 image-div'>
          <CardImage
            className='img-fluid cimg'
            src={props.image}
          />
        </div>
      )}
      <div>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>
            <div className='d-flex justify-content-between'>
              {props.subtitle && <div>{props.subtitle}</div>}
              {props.addInfSub && <div>{props.addInfSub}</div>}
            </div>
          </CardSubtitle>
        </CardHeader>
        {props.description && <CardBody>{props.description}</CardBody>}
      </div>
    </Card>
  );
};
export default CustomCard;
