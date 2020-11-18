import React from 'react';
import Produto from './Produto';
import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';

console.log(UserContext);
const App = () => {
  return (
    <>
      {/* posso passar qualquer valor que quiser no context */}
      <GlobalStorage>
        <UserContext.Provider value={{ nome: 'Paulo' }}>
          <Produto />
        </UserContext.Provider>
      </GlobalStorage>
    </>
  );
};

export default App;
