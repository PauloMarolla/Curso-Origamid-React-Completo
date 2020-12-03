import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  //toda vez q alterar a rota, vai ser ativado o useEffect
  React.useEffect(() => {
    console.log('mudou a rota');
  }, [location]);

  return (
    <nav>
      <NavLink to="/" end activeStyle={{ color: 'tomato' }}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
        Sobre
      </NavLink>
      <NavLink to="login" activeStyle={{ color: 'tomato' }}>
        Login
      </NavLink>
      <h1>Esse é o Header</h1>
    </nav>
  );
};

export default Header;
