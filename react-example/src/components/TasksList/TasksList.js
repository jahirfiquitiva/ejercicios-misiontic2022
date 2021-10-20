import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpGet } from '../../utils/fetch';
import { getToken } from '../../utils/getToken';
import Task from './../Task/Task'; // Task.js

const TasksList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useMemo(() => {
    if (!filter) setFilteredTasks(tasks);

    setFilteredTasks(
      tasks.filter((task) => {
        return task.task.toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [filter, tasks]);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      window.location.href = '/'; // redirecciona a la página principal
      return;
    }

    const getTasks = async () => {
      const tasks = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/tasks`);
      setTasks(tasks);
      setFilteredTasks(tasks);
    };
    getTasks();
  }, []);

  return (
    <>
      <div>
        <input
          type='text'
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <div>
        <Link to={'/login'}>Crear tareas</Link>
        <br />
        <br />
        {(filteredTasks || []).map((item, index) => {
          return (
            <Task key={index} id={item._id} task={item.task} due={item.due} done={item.done} />
          );
        })}
      </div>
    </>
  );
};

export default TasksList;
