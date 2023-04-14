import { Button } from '@progress/kendo-react-buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const routeChange = () => {
    navigate(location.pathname.includes('family') ? '' : 'family');
  };
  return (
    <div className='d-flex custom-header d-flex justify-content-between align-items-center gap-3'>
      <h1 className='text-light header-text'>The DrunkenBeer</h1>
      <Button
        className='custom-button'
        themeColor={'primary'}
        icon={location.pathname.includes('family') ? 'home' : 'cart'}
        size='large'
        onClick={routeChange}
      />
    </div>
  );
};

export default Header;
