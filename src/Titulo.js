import React from 'react';

const Titulo = ({ titulo, descricao }) => {
  return (
    <>
      <h1 style={{ color: 'green' }}>{titulo}</h1>
      <p>{descricao}</p>
    </>
  );
};

export default Titulo;
