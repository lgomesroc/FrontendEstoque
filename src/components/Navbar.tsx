import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Produtos</Link></li>
        <li><Link to="/users" className="nav-link">Usuários</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
