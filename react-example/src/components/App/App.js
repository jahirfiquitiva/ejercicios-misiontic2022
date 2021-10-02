import './App.css';
import TasksList from './../TasksList/TasksList'; // Task.js
import Form from '../Form/Form';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContextComponent, { AppContext } from '../AppContext/AppContext';

// Context

function App() {
  return (
    <Switch>
        <Route exact path={'/'}>
          <div>
            <p>Página principal</p>
          </div>
        </Route>
        <AppContextComponent>
        <Route path={'/login'}>
          <Form />
        </Route>

        <Route path={'/tasks'}>
          <TasksList />
        </Route>
    </AppContextComponent>
      </Switch>
  );
}

export default App;
