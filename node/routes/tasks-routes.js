const express = require('express');
const {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
} = require('./../controllers/tasks-controller');

// Router
const router = express.Router();

router.post('/', createTask);

router.get('/', readTasks);

router.get('/:id', readTasks);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

// GET, POST, PATCH, DELETE // Tasks

module.exports = router;
