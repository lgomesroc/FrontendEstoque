// src/components/LoginForm.tsx
import React, { useState } from 'react';
import api from '../services/api';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      // Armazena o token (ou outros dados) localmente
      localStorage.setItem('token', response.data.token);
      alert('Login bem-sucedido!');
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>Entrar</button>
    </form>
  );
};

export default LoginForm;
