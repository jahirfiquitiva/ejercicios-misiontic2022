import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';
import Task from './../Task/Task'; // Task.js

const TasksList = (props) => {
  const datos = useContext(AppContext)

  // if (tasks === undefined) .. []
  return (
    <div>
      {(datos.tasks || []).map((item, index) => {
        return <Task key={index} task={item.task} due={item.due} done={item.done} />;
      })}
      <br />
      <Link to={'/login'}>
          Crear tareas
      </Link>
    </div>
  );
};

export default TasksList;
