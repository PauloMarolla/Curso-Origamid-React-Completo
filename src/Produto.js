import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  //usado para pegar o valor dos parametros passados na URL
  const params = useParams();
  console.log(params);
  //muito usado para enviar a url com filtro "?q='verde'"
  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search);
  console.log(search.get('q'));
  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
