import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <div>
      <Titulo titulo="Produtos" descricao="Esses sao os produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </div>
  );
};

export default Produtos;
