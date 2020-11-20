import React from 'react';
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
const App = () => {
  const [response, setResponse] = React.useState(null);

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const dados = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );
    if (dados.status === 200) setResponse('Usuario cadastrado');
    if (dados.status !== 200) setResponse('Erro ao cadastrar usuario');
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      {response && <p>{response}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">CEP</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />

        <label htmlFor="rua">Rua</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />

        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
