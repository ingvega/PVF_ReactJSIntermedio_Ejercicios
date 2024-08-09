import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Guardar el valor del contador en localStorage
  // useEffect(() => {
  //   localStorage.setItem('count', count);
  // }, [count]);

  // Recuperar el valor del contador desde localStorage al cargar el componente
useEffect(() => {
  const savedCount = parseInt(localStorage.getItem('count'));
  if (!isNaN(savedCount)) {
    setCount(savedCount);
  }
}, []);



// useEffect(() => {
//   const interval = setInterval(() => {
//     setCount(prevCount => prevCount + 1);
//   }, 1000);

//   // Limpia el intervalo cuando el componente se desmonta
//   return () => clearInterval(interval);
// }, []);


  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor del contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(0)}>Restablecer</button>
    </div>
  );
}

export default App;
