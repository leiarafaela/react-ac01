import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contatos from './Components/Contatos';
import Serviços from './Components/Serviços';
import Sobre from './Components/Sobre';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/servicos' component={Serviços}></Route>
        <Route exact path='/contatos' component={Contatos}></Route>
        <Route exact path='/sobre' component={Sobre}></Route>

      </Switch>
    </div>
  );
}