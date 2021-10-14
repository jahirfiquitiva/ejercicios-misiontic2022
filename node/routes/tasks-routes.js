const express = require('express');
const { validateUser } = require('./../middlewares/validate-user');
const { validateRole } = require('../middlewares/validate-role');
const {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
} = require('./../controllers/tasks-controller');

// Router
const router = express.Router();

router.post('/', [validateUser, validateRole], createTask);

router.get('/', readTasks);

router.get('/:id', readTasks);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

// GET, POST, PATCH, DELETE // Tasks

module.exports = router;
