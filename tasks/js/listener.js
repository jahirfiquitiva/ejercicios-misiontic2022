const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const createBtn = document.getElementById('create-btn');

function renderTasks() {
  const taskText = taskInput.value; // Valor o texto del input
  const dueText = dateInput.value; // Valor o texto del input
  const taskObject = {
    task: taskText,
    due: new Date(dueText),
    done: false,
  }
  tasks.push(taskObject);

  const tasksContainerElement = document.getElementById('tasks');
  tasksContainerElement.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    createTaskElement(tasks[i], i);
  }
}

createBtn.addEventListener('click', renderTasks);