import { Route, Switch } from 'react-router-dom';
import AppContextComponent from '../AppContext/AppContext';
import TasksList from './../TasksList/TasksList'; // Task.js
import Form from '../Form/Form';
import './App.css';

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
