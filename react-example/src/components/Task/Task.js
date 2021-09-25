import './Task.css';

// function Task() {
const Task = (props) => {
  return <div className="task">
    <p>{props.task}</p>
  </div>
}

export default Task;