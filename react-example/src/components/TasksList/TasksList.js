import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpGet } from '../../utils/fetch';
import Task from './../Task/Task'; // Task.js

const TasksList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/tasks`);
      setTasks(tasks);
    };
    getTasks();
  }, []);

  return (
    <div>
      {(tasks || []).map((item, index) => {
        return <Task key={index} task={item.task} due={item.due} done={item.done} />;
      })}
      <br />
      <Link to={'/login'}>Crear tareas</Link>
    </div>
  );
};

export default TasksList;
