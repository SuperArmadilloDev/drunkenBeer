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
const CustomCard = ({
  image,
  title,
  subtitle,
  addInfSub,
  description,
}: Props) => {
  return (
    <Card className='h-100 custom-card'>
      {image && (
        <div className='d-flex justify-content-center border-bottom border-dark p-3 image-div'>
          <CardImage
            className='img-fluid custom-image'
            src={image}
          />
        </div>
      )}
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
            <div className='d-flex justify-content-between'>
              {subtitle && <div>{subtitle}</div>}
              {addInfSub && <div>{addInfSub}</div>}
            </div>
          </CardSubtitle>
        </CardHeader>
        {description && <CardBody>{description}</CardBody>}
      </div>
    </Card>
  );
};
export default CustomCard;
