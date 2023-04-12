import { useState } from 'react';

const PageContext = () => {
  const ROW_NB = 2;
  const COLS_NB = 3;

  const [currentPage, setcurrentPage] = useState(1);
  const [perPageNb, setperPageNb] = useState(ROW_NB * COLS_NB);

  const next = () => {
    setcurrentPage(currentPage + 1);
  };
  const previous = () => {
    setcurrentPage(currentPage - 1);
  };
  return {
    next,
    previous,
    currentPage,
    perPageNb,
  };
};

export { PageContext };
