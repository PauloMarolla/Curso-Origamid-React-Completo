import React from 'react';

//minha lista de cores para o map
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  //meu estado com as cores pre selecionadas
  const [cores, setCores] = React.useState(['azul', 'cinza']);

  //funcao atualizadora de estado
  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      <form action="">
        <h2>Cores</h2>
        {/* //um map com cada checkbox de acordo com o valor de cada um na array */}
        {coresArray.map((itemCor) => {
          return (
            // transformando a primeira letra da label em maiuscula com css
            <label key={itemCor} style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                value={itemCor}
                checked={cores.includes(itemCor)}
                onChange={handleChange}
              />
              {itemCor}
            </label>
          );
        })}
      </form>
    </>
  );
};

export default App;
