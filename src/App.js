import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      {termos && <p>Aceitou os termos</p>}
      <form action="">
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos.
        </label>
        <h2>Multiplos checkBox</h2>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </>
  );
};

export default App;
