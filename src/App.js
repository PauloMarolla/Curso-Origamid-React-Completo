import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    //sempre usar o current, para o useRef para ter a referenciado objeto
    inputElement.current.focus();
  }

  function handleCarrinho() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho!');

    //sempre utilizar o current no elementRef
    clearInterval(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>

      <p>{notificacao}</p>
      <button onClick={handleCarrinho}>Adicionar ao Carrinho {carrinho}</button>
    </>
  );
};

export default App;
