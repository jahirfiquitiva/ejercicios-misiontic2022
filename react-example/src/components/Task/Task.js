import './Task.css';

// function Task() {
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

export default Task;
