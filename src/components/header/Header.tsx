import { Button } from '@progress/kendo-react-buttons';
import './Header.scss';
// import '../../font/TiltPrism';

const Header = () => {
  return (
    <div className='d-flex bg-color custom-header d-flex justify-content-between align-items-center gap-3'>
      <h1 className='text-light header-text'>The DrunkenBeer</h1>
      <Button
        className='custom-button'
        themeColor={'primary'}
        icon='cart'
        size='large'
        iconClass='custom-icon'
      />
    </div>
  );
};

export default Header;
