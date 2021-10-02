import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  return (
    <div className='task'>
      <input type={'checkbox'} checked={props.done} />
      <div>
        <h6>{props.task}</h6>
        <p>{`Due: ${props.due.getDate() + 1}/${
          props.due.getMonth() + 1
        }/${props.due.getFullYear()}`}</p>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  due: PropTypes.object.isRequired,
  done: PropTypes.bool, // boolean
}

export default Task;
