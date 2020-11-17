import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  async function handleClick({ target }) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`,
    );
    const json = await response.json();
    setProduto(json);
    setCarregando(false);
  }

  return (
    <>
      {produto ? <Produto {...produto} /> : 'Sem produtos'}
      {carregando && <p>Carregando...</p>}
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
    </>
  );
};

export default App;
