import Task from './../Task/Task'; // Task.js

const TasksList = (props) => {
  // Object Destructuring
  // const tasks = props.tasks;
  const { tasks } = props;

  // if (tasks === undefined) .. []
  return (
    <div>
      {(tasks || []).map((item, index) => {
        return <Task key={index} task={item.task} due={item.due} done={item.done} />;
      })}
    </div>
  );
};

export default TasksList;
