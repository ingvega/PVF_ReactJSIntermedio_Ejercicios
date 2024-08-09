import React from 'react';
import useUsers from '../hooks/useUsers';

const UserList = () => {
  const { users, loading, error, setSearchTerm } = useUsers('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar usuarios"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
