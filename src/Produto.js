import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

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
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliacao</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />}></Route>
        <Route path="avaliacao" element={<ProdutoAvaliacao />}></Route>
        <Route path="customizado" element={<ProdutoCustomizado />}></Route>
      </Routes>
    </div>
  );
};

export default Produto;
