import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const Users: React.FC = () => {
  return (
    <div>
      <h1>Gestão de Usuários</h1>
      <UserList />
      <UserForm />
    </div>
  );
};

export default Users;
