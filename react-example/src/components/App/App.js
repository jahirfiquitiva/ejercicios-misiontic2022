import './App.css';
import TasksList from './../TasksList/TasksList'; // Task.js
import Form from '../Form/Form';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task, due) => {
    const newTask = {
      task,
      due: new Date(due),
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <Switch>
      <Route exact path={'/'}>
        <div>
          <p>Página principal</p>
          <TasksList tasks={tasks} />
          <Form createTask={createTask} />
        </div>
      </Route>

      <Route exact path={'/login'}>
        <Form createTask={createTask} />
      </Route>

      <Route exact path={'/ventas'}>
        <TasksList tasks={tasks} />
      </Route>
    </Switch>
  );
}

export default App;
