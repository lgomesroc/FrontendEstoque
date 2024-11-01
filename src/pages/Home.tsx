import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <h1>Sistema de Estoque</h1>
    <nav>
      <ul>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/users">Usuários</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
