import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navbar(){
  return (
      <div>
          <ul>
            <NavLink activeClassName='active_styles' exact to='/'><li>Início</li></NavLink>
            <NavLink activeClassName='active_styles' exact to='/servicos'><li>Serviços</li></NavLink>
            <NavLink activeClassName='active_styles' exact to='/contatos'><li>Contatos</li></NavLink>
            <NavLink activeClassName='active_styles' exact to='/sobre'><li>Sobre</li></NavLink>
          </ul>
      </div>
  );
}
