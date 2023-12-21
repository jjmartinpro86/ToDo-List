import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = () => {
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="taskInput">
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task].sort());
  };

  const deleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="toDoListContainer">
      <TaskInput onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;



