import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <>
      {/* Essa é a primeira forma de fazer o input radio ser reativo, passando o name unico */}
      <h2>Produto</h2>
      {produto}
      <form action="">
        <label>
          <input
            onChange={handleChange}
            name="produto"
            value="smartphone"
            type="radio"
          />
          Smartphone
        </label>
        <label>
          <input
            onChange={handleChange}
            name="produto"
            value="notebook"
            type="radio"
          />
          Notebook
        </label>
        <h2>Cor</h2>
        {/* essa é a segunda forma de fazer o input radio reativo, passando o checked da variavel comparando com o valor */}
        {cor}
        <label>
          <input
            onChange={({ target }) => setCor(target.value)}
            value="azul"
            checked={cor === 'azul'}
            type="radio"
          />
          Azul
        </label>
        <label>
          <input
            onChange={({ target }) => setCor(target.value)}
            value="vermelho"
            type="radio"
            checked={cor === 'vermelho'}
          />
          Vermelho
        </label>
      </form>
    </>
  );
};

export default App;
