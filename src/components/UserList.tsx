import React from 'react';
import { User } from '../services/api';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
