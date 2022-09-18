import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Serviços(){
  return (
      <div>
          <h1>Serviços disponíveis:</h1>
          <div className='services'>
            <Link><li>Criar sites</li></Link>
            <Link><li>Desenvolver apps</li></Link>
            <Link><li>Criar Chatbots</li></Link>
            <Link><li>Automatizador de tarefas diárias</li></Link>
          </div>
          <Link to="/">Voltar</Link>
      </div>
  );
}