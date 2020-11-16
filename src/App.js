import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  // o useState tem que estar dentro do componente para funcionar
  const [ativo, setAtivo] = React.useState(false);

  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }
  return (
    <>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
      <br />

      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};

export default App;
