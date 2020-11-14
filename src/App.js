import React from 'react';

const titulo = <h1>Esse é meu titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'Paulo' + sobrenome;
  }

  const carro = {
    marca: 'Honda',
    rodas: 4,
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      {titulo}
      {/* a funcao tem q ser ativa para printar o valor retornado */}
      {mostrarNome('Marolla')}
      <br />
      {/* ele nao printa true ou false, mas printa os valores - ele printa os numeros se passados */}
      {true ? 'o valor é true' : 'O valor é false'} - {10}
      {/* posso realizar expressoes matematicas direto aqui dentro */}
      <p style={estiloP} className={ativo ? 'ativo' : 'inativo'}>
        {random * 100}
      </p>
      <br />
      {carro.marca}
      {carro.rodas}
    </>
  );
};

export default App;
