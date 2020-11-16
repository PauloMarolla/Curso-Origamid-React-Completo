import React from 'react';
import Produtos from './Produtos';
import Home from './Home';
import Header from './Header';

const App = () => {
  const { pathname } = window.location;

  let Component;

  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default App;
