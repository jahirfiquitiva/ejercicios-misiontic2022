// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Task = require('./../models/task-model');
const tasks = [];

// task, due, done
// POST
const createTask = (request, response) => {
  const task = request.body;
  if (!task.due) {
    return response.status(400).send({ ok: false });
  }

  const newTask = {
    ...task,
    id: new Date().getTime(),
  };

  tasks.push(newTask);
  return response.send({ ok: true, task: newTask, tasks });
};

// GET
const readTasks = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if (id) {
    filter._id = id;
  }

  Task.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateTask = () => {};

// DELETE
const deleteTask = () => {};

module.exports = {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
};
