import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { useEffect, useState } from 'react';
import './App.scss';
// import data from './data/donneesTest.json';
import { CustomGrid, Header } from './components';

import { whoIsPaying } from './Service/FindParent';
interface Data {
  id: number;
  name: string;
  linkId: number | null;

  // all the child of the current node
  nodes?: number[];
}

let data: Data[] = require('./data/donneesTest.json');

function App() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log(whoIsPaying(data));
  }, []);

  const changeFilter = (event: SwitchChangeEvent) => {
    setToggle(event.target.value);
  };

  return (
    <div className='App px-3 pt-5'>
      <Header />
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
