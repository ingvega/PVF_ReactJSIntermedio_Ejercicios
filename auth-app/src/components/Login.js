import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
