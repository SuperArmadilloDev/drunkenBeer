import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Layout, FamilyTree } from './pages';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
