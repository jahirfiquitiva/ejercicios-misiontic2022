function createTaskElement(task, index) {
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
  contentDateElement.innerText = `Due: ${task.due.getDate()+1}/${task.due.getMonth()+1}/${task.due.getFullYear()}`;

  contentElement.appendChild(contentTitleElement);
  contentElement.appendChild(contentDateElement);

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(contentElement);

  const tasksContainerElement = document.getElementById('tasks');
  tasksContainerElement.appendChild(taskElement);
}