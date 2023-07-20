import React from 'react';
import '../todo-list/todo-list.css';

const ToDoList = ({ tasks, onDeleteTask }) => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className='task'>{task}</div>
            <button id='deleteTask' onClick={() => onDeleteTask(index)}>Delete task</button>
          </li>
        ))}
      </ul>
    );
  };

export default ToDoList;
