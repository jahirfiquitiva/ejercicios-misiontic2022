import PropTypes from 'prop-types';
import { httpDelete } from '../../utils/fetch';
import './Task.css';

const Task = (props) => {
  const deleteTask = async () => {
    const resultado = await httpDelete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.id}`);
    window.location.reload(false);
  };

  return (
    <div className='task'>
      <input type={'checkbox'} checked={props.done} />
      <div>
        <h6>{props.task}</h6>
        <p>{`Due: ${props.due}`}</p>

        <a href={`/edit/${props.id}`}>Editar tarea</a>

        <button onClick={deleteTask}>Eliminar tarea</button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  due: PropTypes.object.isRequired,
  done: PropTypes.bool, // boolean
};

export default Task;
