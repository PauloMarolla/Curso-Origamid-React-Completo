import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <h3>{nome}</h3>
      <ul style={{ padding: '1rem', border: '1px solid #000' }}>
        {propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Produto;
