import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Page404 from './Page404';
import Login from './Login';
import Produto from './Produto';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          {/* o * é utilizado para quando vc indica qualquer coisa apos a rota */}
          <Route path="produto/:id/*" element={<Produto />} />
          {/* o * é utilizado para pagina nao encontrada */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
