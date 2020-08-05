import React, { useState } from 'react';

import './App.css';
import Todo from './component/Todo'
import Task from './component/Task'

function App() {
  const [tasks, setTasks] = useState(['sleep', 'run ', 'study'])
  const [Value, setValue] = useState('')

  const DeleteTask = (name) => {
    var newlist = [];

    tasks.map((n) => { if (n !== name) newlist.push(n); })
    setTasks(newlist);
  }
  const addTask = (task) => {
    var newlist = tasks;
    newlist.push(task);
    console.log(task)
    setTasks(newlist);

  }
  const onsubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value)
    addTask(Value)

  }
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value)

  }

  return (
    <div class='app' >

      <h1>Todo List App</h1>
      <form onSubmit={onsubmit}>
        <input type='text' onChange={handleChange} value={Value}></input>

        <button >submit </button>
      </form>

      {tasks.map((task) => <Todo name={task} DeleteTask={DeleteTask} />)}

    </div>
  );
}

export default App;
