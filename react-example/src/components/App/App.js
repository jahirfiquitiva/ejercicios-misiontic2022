import { Route, Switch, Link } from 'react-router-dom';
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
          <br/>
          <Link to={'/create'}>Crear tareas</Link>
          <br/>
          <Link to={'/tasks'}>Ver tareas</Link>
        </div>
      </Route>
      <AppContextComponent>
        <Route path={'/create'}>
          <Form />
        </Route>

        <Route path={'/edit/:id?'}>
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
