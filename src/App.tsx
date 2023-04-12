import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { useState } from 'react';
import './App.scss';

import CustomGrid from './components/grid/CustomGrid';

function App() {
  const [toggle, setToggle] = useState(false);

  const changeFilter = (event: SwitchChangeEvent) => {
    setToggle(event.target.value);
  };

  return (
    <div className='App px-3 pt-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Beer Catalog</h1>
        <div className='d-flex gap-3'>
          <h5>Show me your strongest beer!</h5>
          <Switch
            value={toggle}
            onChange={changeFilter}
            onLabel={'> 8'}
            offLabel={'< 8'}
          />
        </div>
      </div>
      <CustomGrid toggle={toggle} />
    </div>
  );
}

export default App;
