import React from 'react';
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
const App = () => {
  const [select, setselect] = React.useState('');

  return (
    <>
      <form action="">
        <select
          id=""
          value={select}
          onChange={({ target }) => setselect(target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        {select}
      </form>
    </>
  );
};

export default App;
