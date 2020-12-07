import React from 'react';

//@param {state} o estado agora é o primeiro argumento
//@param {action} é a acao ocorrida
function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error('action nao existe');
  }
}
const App = () => {
  //state é o estado, e o dispatch é a funcao q ativa a funcao redutora
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>+</button>
      <p>{state}</p>
    </>
  );
};

export default App;
