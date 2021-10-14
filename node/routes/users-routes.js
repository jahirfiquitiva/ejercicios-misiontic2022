const express = require('express');
const {
  createUser,
  readUsers,
  authUser
} = require('./../controllers/users-controller');

// Router
const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/:id', readUsers);

router.post('/auth/', authUser);

module.exports = router;
