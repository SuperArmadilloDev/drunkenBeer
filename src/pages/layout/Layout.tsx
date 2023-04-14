import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

import './Layout.scss';
// import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <div className='px-3 pt-5 background'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
