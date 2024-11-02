import React from 'react';
import UserForm from '../components/UserForm';

const Users: React.FC = () => {
  const handleAddUser = (user: { name: string; email: string; password: string }) => {
    console.log('Usuário adicionado:', user);
    // Adicione a lógica para enviar o usuário para a API
  };

  return (
    <div className="container">
      <UserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default Users;
