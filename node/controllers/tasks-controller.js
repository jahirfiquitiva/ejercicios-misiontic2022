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

  const newTask = new Task({
    ...task,
    _id: new Date().getTime(),
  });
  newTask.save((error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
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
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

// PATCH
const updateTask = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para modificar' });
  }

  Task.updateOne({ _id: id }, request.body, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }

    Task.find({ _id: id }, (error, result) => {
      if (error) {
        return response.status(500).send({ error });
      }
      return response.send(result);
    });
  });
};

// DELETE
const deleteTask = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para eliminar' });
  }
  Task.remove({ _id: id }, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

module.exports = {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
};
