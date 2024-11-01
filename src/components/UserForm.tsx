import React, { useState } from 'react';
import api from '../services/api';

const UserForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = { nome, email, senha };

    await api.post('/users', user);

    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      </div>
      <button type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default UserForm;
