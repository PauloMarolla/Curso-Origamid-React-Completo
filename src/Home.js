import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="home" description="Essa é a descricao da home" />
      <h1>Essa é a home</h1>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
