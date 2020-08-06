import React, { useState } from 'react';

import './App.css';
import Todo from './component/Todo'
import Task from './component/Task'


function App() {
  const [tasks, setTasks] = useState([{ id: 0, t: 'sleep' }, { id: 1, t: 'run ' }, { id: 2, t: 'study' }])
  //I've created this state variable just to refresh the Tasks.
  const [Value, setValue] = useState('')

  const DeleteTask = (name) => {
    var newlist = [];

    tasks.map((n) => { if (n.t !== name) newlist.push(n); })
    setTasks(newlist);
  }
  const addTask = (task) => {

    setValue(task)
    console.log('add task ', Value)
    var newlist = tasks;
    var Id = tasks[tasks.length - 1].id + 1;
    newlist.push({ id: Id, t: task });
    setTasks(newlist);


  }

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setValue(e.target.value)

  // }

  return (
    <div className='app' >


      <h1>Todo List App</h1>

      <Task addTask={addTask} Value={Value} setValue={setValue} />
      {console.log('return', tasks)}

      {tasks.map((task) => <Todo key={task.id} name={task.t} DeleteTask={DeleteTask} />)}

    </div>
  );
}

export default App;
