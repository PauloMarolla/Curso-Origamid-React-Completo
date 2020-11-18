import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  return (
    <>
      <p>Produto preferido: {produto}</p>
      <button onClick={({ target }) => setProduto(target.innerText)}>
        notebook
      </button>
      <button onClick={({ target }) => setProduto(target.innerText)}>
        smartphone
      </button>
    </>
  );
};

export default App;
