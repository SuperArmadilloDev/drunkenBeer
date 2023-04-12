import './App.scss';

import CustomGrid from './components/grid/CustomGrid';

import { PageContext } from './contexts/PageContext';
import useFetchData from './hooks/UseFetchData';

function App() {
  const { currentPage, perPageNb } = PageContext();
  const beers = useFetchData(
    `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPageNb}`
  );

  return (
    <div className='App px-3 pt-5'>
      <h1>Beer Catalog</h1>

      <CustomGrid data={beers} />
    </div>
  );
}

export default App;
