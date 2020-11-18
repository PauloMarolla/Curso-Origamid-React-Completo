import React from 'react';

export const GlobalContext = React.createContext();

//posso exportar o contexto, mas tbm criar o contexto e toda uma lógica dentro do contexto, e apenas exportar -los
// Muito util para ter estados e dados pela aplicação de forma global
export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((r) => r.json())
      .then((r) => [setDados(r), console.log(r)]);
  }, []);

  function limparDados() {
    setDados(null);
  }
  return (
    <GlobalContext.Provider value={{ contar, dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
