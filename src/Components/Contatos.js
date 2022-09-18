import React from 'react';
import { Link } from 'react-router-dom';

export default function Contatos(){
  return (
      <div>
          <h1>Contatos:</h1>
          <p> servicesweb@gmail.com</p>
          <p>1195458989</p>
          <Link to="/">Voltar</Link>
      </div>
  );
}