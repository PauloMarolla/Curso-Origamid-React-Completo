import React from 'react';

export const GlobalContext = React.createContext();

//posso exportar o contexto, mas tbm criar o contexto e toda uma lógica dentro do contexto, e apenas exportar -los
// Muito util para ter estados e dados pela aplicação de forma global
export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarUm() {
    setContar((contar) => contar + 1);
  }
  function adicionarDois() {
    setContar((contar) => contar + 2);
  }
  return (
    <GlobalContext.Provider value={{ contar, adicionarUm, adicionarDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
