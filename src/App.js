import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  // funcao que deixa todos os campos do form como reativos
  function handleChange({ target }) {
    const { id, value } = target;
    // [id] ta entre colchete, justamente para ele acessar a propriedade de cada ID, e n passar o digito 'id'
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        {form.nome}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        {form.email}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
