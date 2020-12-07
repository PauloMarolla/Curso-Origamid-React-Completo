import React from 'react';

const Header = () => {
  console.log('renderizou');
  return (
    <div>
      <h1>Header aqui</h1>
    </div>
  );
};

//o memo faz com que o elemento nao seja renderizando novamente (elementos estaticos)
export default React.memo(Header);
