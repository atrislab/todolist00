import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleClear = () => {
    setTasks([]);
  };

  return (
  <body>
    <header>
      <h1>Lista de Tareas</h1>
    </header>
    <main>
      <form id='form' onSubmit={handleSubmit}>
        <input
          type="text"
          id='textinput'
          placeholder='Add'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='button' id='submitbutton' type="submit">Agregar tarea</button>
      </form>
      <ul className='list'>
        {tasks.map((task, index) => (
          <li className='lielement' key={index}>
            {task}
            <button className='button' id='deletebutton' onClick={() => handleDelete(index)}>Borrar</button>
          </li >
        ))}
      </ul>
      <button className='button' id='clearbutton' onClick={handleClear}>Borrar todas las tareas</button>
    </main>
    <footer>
      <p>He de mejorarlo con las nuevas indicaciones</p>
      <p>y mejorar los estilos</p>
    </footer>
  </body>
  );
}

export default App;