import { Button } from '@progress/kendo-react-buttons';
import { useState } from 'react';

import './PageNavigation.scss';

interface Props {
  updatePage: (arg: number) => void;
  className?: string;
}

const PageNavigation = (props: Props) => {
  const [nb, setNb] = useState(1);

  const onPrevClick = () => {
    props.updatePage(nb - 1);
    setNb(nb - 1);
  };

  const onNextClick = () => {
    props.updatePage(nb + 1);
    setNb(nb + 1);
  };

  const onPageChanged = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') props.updatePage(nb);
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value =
      +event.currentTarget.value < 1 ? 1 : +event.currentTarget.value;
    setNb(value);
  };

  return (
    <div className={props.className}>
      <div className='w-100 d-flex justify-content-center'>
        <div className='d-flex justify-content-between align-items-center cwidth'>
          <Button
            onClick={onPrevClick}
            className='buttons-container-button'
            themeColor={'primary'}
            icon='arrow-chevron-left'
            disabled={nb === 1 ? true : false}
          />
          <div className='d-flex justify-content-center'>
            <input
              className='text-center border border-primary rounded'
              id='selectPage'
              type='number'
              value={nb}
              min={1}
              onChange={handleChange}
              onKeyDown={onPageChanged}
            />
          </div>
          <Button
            onClick={onNextClick}
            className='buttons-container-button'
            themeColor={'primary'}
            icon='arrow-chevron-right'
          />
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
