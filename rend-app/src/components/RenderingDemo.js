// /src/components/RenderingDemo.js
import React, { useState, useMemo } from 'react';
import UserList from './UserList';

const RenderingDemo = () => {
  const [showUsers, setShowUsers] = useState(false);

  const handleToggleUsers = () => setShowUsers(!showUsers);

  return (
    <div>
      <h1>Demostración de Técnicas de Rendering</h1>
      <button onClick={handleToggleUsers}>
        {showUsers ? 'Ocultar Usuarios' : 'Mostrar Usuarios'}
      </button>
      {showUsers && <UserList />}
    </div>
  );
};

export default RenderingDemo;
