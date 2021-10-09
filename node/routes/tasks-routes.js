const express = require('express');
const { createTask, readTasks } = require('./../controllers/tasks-controller');

// Router
const router = express.Router();

router.post('/', createTask);

router.get('/', readTasks);

router.get('/:id', readTasks);

// GET, POST, PATCH, DELETE // Tasks

module.exports = router;
