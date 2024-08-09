import React from 'react';
import MyLineChart from './components/MyLineChart';
import MyBarChart from './components/MyBarChart';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Visualización de datos gráficos</h1>
      <div className="contenedor-grafica">
        <h2>Gráfico de líneas</h2>
        <MyLineChart/>
      </div>
      <div className="contenedor-grafica">
        <h2>Gráfico de barras</h2>
        <MyBarChart/>
      </div>
    </div>
  );
}

export default App;
