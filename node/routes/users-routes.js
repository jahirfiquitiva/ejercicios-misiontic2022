const express = require('express');
const { validateUser } = require('../middlewares/validate-user');
const {
  createUser,
  readUsers,
  readUserData,
  authUser,
  authWithGoogle,
} = require('./../controllers/users-controller');

// Router
const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/me', [validateUser], readUserData);

router.get('/:id', readUsers);

router.post('/auth/', authUser);
router.post('/auth/google', authWithGoogle);

module.exports = router;
