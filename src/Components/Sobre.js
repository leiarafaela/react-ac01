import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre(){
  return (
      <div>
          <p>Oferemos prestação de serviços de qualidade afim de atender as necessidades dos nossos clientes.</p>
          <Link to="/">Voltar</Link>
      </div>
  );
}