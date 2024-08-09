import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserListTable from './components/UserListTable';
import './styles/styles.css';
function App() {
  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <UserList/>
      <UserListTable/>
    </div>
  );
}

export default App;
