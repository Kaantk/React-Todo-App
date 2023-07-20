import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/todo-list/index';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onChangeInput = (event) => {
    setNewTask(event.target.value);   
  }
  
  const addTask = () => {
    if (newTask.trim() === "") {
      console.log("görev boş girildi !");
    }
    else {
      setTasks([...tasks, newTask]);  
      setNewTask("");
    }
  }

  const onDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 id="title">React - Todo List</h2>

        <form onSubmit={onSubmit} id='taskForm'> 
          <input 
            type='text'
            className='taskInput'
            onChange={onChangeInput}
            placeholder='Add a task'
            value={newTask}
          />
          <button onClick={addTask} id='addTask'>Add Task</button>
        </form>

        <ToDoList tasks={tasks} onDeleteTask={onDeleteTask}/>
      </div>
    </div>
  );
}

export default App;
