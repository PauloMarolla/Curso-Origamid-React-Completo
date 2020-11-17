import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  console.log('teste');
  // o useEffect será ativado toda vez q a array de dependencias alterar, caso nao houver dependencia, apenas será executado uma unica vez
  React.useEffect(() => {
    console.log('use effect');
  }, []);

  React.useEffect(() => {
    document.title = 'total ' + contar;
    //o return recebe uma funcao de callback, q será executada toda vez q o efeito sair da tela
    return () => {
      console.log('saiu da tela');
    };
  }, [contar]);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
