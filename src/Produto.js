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

      <button onClick={() => contexto.limparDados()}>Limpar</button>

      {contexto.dados &&
        contexto.dados.map(({ id, fotos, nome, preco }) => (
          <ul key={id}>
            <li>Nome: {nome}</li>
            <li>Foto: {fotos[0].src}</li>
            <li>Preço: {preco}</li>
          </ul>
        ))}
    </div>
  );
};

export default Produto;
