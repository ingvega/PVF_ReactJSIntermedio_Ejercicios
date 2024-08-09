// /src/components/UserList.js
import React, { useMemo } from 'react';
import User from './User';
import '../styles/styles.css';

const UserList = () => {
  const users = useMemo(() => [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María López' },
    { id: 3, name: 'Carlos García' }
  ], []);

  return (
    <div className="user-list">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
