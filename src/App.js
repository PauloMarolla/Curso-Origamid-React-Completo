import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    const produto = event.target.innerText;
    produto != null
      ? localStorage.setItem('preferencia', produto)
      : console.log('produto é null');
    getProduto(produto);
  }

  function getProduto(produto) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((r) => r.json())
      .then((response) => [setDados(response), console.log(response)]);
  }

  React.useEffect(() => {
    const preferencia = localStorage.getItem('preferencia');
    if (preferencia != null) getProduto(preferencia);
  }, []);

  return (
    <>
      <Produto {...dados} />
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  );
};

export default App;
