import Task from './../Task/Task'; // Task.js

const tasks = [{
  task: 'Search pokemon',
  due: new Date('2021-09-25'),
  done: false,
}, {
  task: 'Catch pokemon',
  due: new Date('2021-09-25'),
  done: false,
}]

const TasksList = () => { 
  return (
    <div>
      {tasks.map((item, index) => {
        return <Task task={item.task} />
      })}
    </div>
  );
};

export default TasksList;
