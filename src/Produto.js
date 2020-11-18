import React from 'react';
import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  //tem q importar e usar o contexto
  const dados = React.useContext(UserContext);
  const contexto = React.useContext(GlobalContext);

  return (
    <div>
      <p>{dados.nome}</p>

      <button onClick={() => contexto.adicionarUm()}>{contexto.contar}</button>
    </div>
  );
};

export default Produto;
