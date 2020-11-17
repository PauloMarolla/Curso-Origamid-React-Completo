import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  //UseCalback cria apenas 1 funcao toda vez q o componente for renderizado novamente
  const handleClick = React.useCallback(() => {
    //no callback da funcao atualizadora do useState, a gente tem o valor anterior do elemento
    setContar((value) => value + 1);
  }, []);

  return (
    <>
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
