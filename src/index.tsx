import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/home/Home';
import { Home, Layout, FamilyTree } from './pages';
import './index.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='family'
            element={<FamilyTree />}
          />
          <Route
            path='*'
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
