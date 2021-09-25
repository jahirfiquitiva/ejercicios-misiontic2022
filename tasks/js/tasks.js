// DOM Document Object Model
const firstTask = {
  task: 'Search pokemon',
  due: '25/09/21',
  done: false,
}

const secondTask = {
  task: 'Catch pokemon',
  due: '27/09/21',
  done: true,
}

const thirdTask = {
  task: 'Third task',
  due: '28/10/21',
  done: false,
}

const tasks = [firstTask, secondTask, thirdTask];

function createTaskElement (task, index) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.name = `check-${index}`;
  checkboxElement.checked = task.done;

  const contentElement = document.createElement('div');
  contentElement.classList.add('content');

  const contentTitleElement = document.createElement('h6');
  contentTitleElement.innerText = task.task;

  const contentDateElement = document.createElement('p');
  // interpolation
  contentDateElement.innerText = `Due: ${task.due}`;

  contentElement.appendChild(contentTitleElement);
  contentElement.appendChild(contentDateElement);

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(contentElement);

  const tasksContainerElement = document.getElementById('tasks');
  tasksContainerElement.appendChild(taskElement);
}

for (let i = 0; i < tasks.length; i++) {
  createTaskElement(tasks[i], i)
}

const taskInput = document.getElementById('task-input');
const createBtn = document.getElementById('create-btn');

function showTask () {
  const task = taskInput.value; // Valor o texto del input
  console.log(task);
}

createBtn.addEventListener('click', showTask);
