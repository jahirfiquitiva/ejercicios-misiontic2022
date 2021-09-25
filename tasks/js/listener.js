const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const createBtn = document.getElementById('create-btn');

function validateTask(taskText, dueText) {
  // Early return 
  if (taskText.length < 5) {
    return {
      valid: false,
      error: 'El texto de la tarea es muy corto'
    };
  }
  // 2021-09-25
  if (dueText.length < 10) {
    return {
      valid: false,
      error: 'La fecha de la tarea es inválida'
    };
  }
  const dueDate = new Date(dueText); // 12:00:00.000 am
  dueDate.setDate(dueDate.getDate() + 1); // Añado 1 día

  const now = new Date(); // 9:04 am // millis 199239944586 
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);

  if (dueDate < now) {
    return {
      valid: false,
      error: 'La tarea NO puede hacerse en el pasado'
    };
  }
  
  return {
    valid: true,
    error: ''
  }; // Válido o NO válido
}

function renderTasks() {
  const taskText = taskInput.value; // Valor o texto del input
  const dueText = dateInput.value; // Valor o texto del input

  const validation = validateTask(taskText, dueText);
  // if (validation.valid === false) {
  if (!validation.valid) {
    alert(validation.error);
    return;
  }

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