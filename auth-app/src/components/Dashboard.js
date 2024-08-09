import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Tablero</h1>
      <p>Esta es una página protegida. Solo los usuarios autenticados pueden verla.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;
