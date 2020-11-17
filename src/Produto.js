import React from 'react';

const Produto = ({ nome, preco }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preco: {preco}</p>
    </div>
  );
};

export default Produto;
