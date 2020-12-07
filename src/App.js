import React from 'react';
//import no formato lazy
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      {/* chamar o suspense com o fallback  */}
      {ativo && (
        <React.Suspense fallback={<div>carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </>
  );
};

export default App;
