import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  //usar os useStates dos formularios, sempre dentro do form completo, nunca no componente
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  // produto = selectHTML
  const [produto, setProduto] = React.useState('');
  // [cor, fruta] = inputRadioHTML
  const [cor, setCor] = React.useState('Azul');
  const [fruta, setFruta] = React.useState('Azul');

  return (
    <>
      <form>
        {/* passando os parametros para o campo de input Radio */}
        <h2>Cores</h2>
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
        <h2>Frutas</h2>
        <Radio
          options={['Melancia', 'Pera', 'Maçã']}
          value={fruta}
          setValue={setFruta}
        />
        {/* passando os parametros para o campo de select */}
        <Select
          options={['notebook', 'smartphone', 'tablet']}
          value={produto}
          setValue={setProduto}
        />
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
