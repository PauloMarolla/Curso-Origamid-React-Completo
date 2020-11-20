import React from 'react';
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
const App = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <>
      <form action="">
        <textarea
          id=""
          value={textarea}
          onChange={({ target }) => setTextarea(target.value)}
        ></textarea>
        {textarea}
      </form>
    </>
  );
};

export default App;
