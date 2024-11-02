// src/components/UserForm.tsx
import React, { useState } from 'react';

interface UserFormProps {
  onAddUser: (user: { name: string; email: string; password: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }
    const newUser = { name, email, password };
    onAddUser(newUser);
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default UserForm;
