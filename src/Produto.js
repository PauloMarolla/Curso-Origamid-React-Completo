import React from 'react';

const Produto = ({ nome, preco, fotos }) => {
  if ((nome, preco, fotos)) {
    return (
      <div>
        <h1>{nome}</h1>
        <p>{preco}</p>
        <img src={fotos[0].src} alt={fotos[0].titulo} />
      </div>
    );
  }
  return null;
};

export default Produto;
