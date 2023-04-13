import './Home.scss';

import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { useState } from 'react';

import { CustomGrid } from '../../components';

function Home() {
  const [toggle, setToggle] = useState(false);

  const changeFilter = (event: SwitchChangeEvent) => {
    setToggle(event.target.value);
  };

  return (
    <div>
      <div className='d-flex justify-content-end align-items-center border-bottom border-dark margin-filter'>
        <div className='d-flex gap-3'>
          <h5>Show me your strongest beers!</h5>
          <Switch
            value={toggle}
            onChange={changeFilter}
          />
        </div>
      </div>
      <CustomGrid toggle={toggle} />
    </div>
  );
}

export default Home;
