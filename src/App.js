import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: blue;
`;

const Preco = styled.p`
  /* background: ${({ cor }) => cor}; */
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: tomato;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1.2rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre Aqui
      </Comprar>
      <Titulo>Meu titulo</Titulo>
      <Paragrafo>esse é o meu paragrafo</Paragrafo>
      <Preco cor="#378">R$: 1500,00</Preco>
      <Preco cor="#952">R$: 1500,00</Preco>
    </>
  );
};

export default App;
