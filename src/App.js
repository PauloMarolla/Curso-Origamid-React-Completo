import React from 'react';
import Input from './Form/Input';

const App = () => {
  //usar os useStates dos formularios, sempre dentro do form completo, nunca no componente
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
      <form>
        {/* passando os parametros para o campo de input */}
        <Input
          id="nome"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />
        <Input id="email" label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
