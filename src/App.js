import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; 1 < 100000000; i++) {
    c = i + 1 / 10;
    return c;
  }
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);
  console.log(valor);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
