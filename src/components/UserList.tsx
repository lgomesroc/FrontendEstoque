import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface User {
  id: number;
  nome: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.nome}</strong>: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
