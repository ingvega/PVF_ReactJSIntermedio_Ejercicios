import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Aplicación de registro de usuarios</h1>
      <RegistrationForm/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
