import { Button } from '@progress/kendo-react-buttons';

import { PageContext } from '../../contexts/PageContext';

const PageNavigation = () => {
  const { currentPage, next, previous } = PageContext();

  return (
    <div>
      <Button
        onClick={previous}
        className='buttons-container-button'
        icon='arrow-chevron-left'
        disabled={currentPage === 1 ? true : false}
      />
      <div>{currentPage}</div>
      <Button
        onClick={next}
        className='buttons-container-button'
        icon='arrow-chevron-right'
      />
    </div>
  );
};

export default PageNavigation;
