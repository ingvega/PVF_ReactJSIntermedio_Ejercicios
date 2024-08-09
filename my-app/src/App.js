import React, { useState } from 'react';

function App() {
  // Definir los estados
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Manejo del evento onChange
  function handleInputChange(event) {
    setInputValue(event.target.value); // Actualiza el estado con el valor del input
  }

  //Agrega una nueva tarea a la lista 
  function addTask() {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(""); // Limpia el input
    }
  }  

  //Crea una función para marcar la tarea como completada
  function toggleCompleteTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }  

  //Elimina las tareas
  function deleteTask(index) {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }
  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* Input y botón para agregar nuevas tareas */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Asignar el manejador de eventos
        placeholder="Agregar nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>

      {/* Renderizar la lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => toggleCompleteTask(index)}>Completar</button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;
