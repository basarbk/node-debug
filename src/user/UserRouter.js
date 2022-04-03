const router = require('express').Router();
const UserService = require('./UserService');

router.post('/users', (req, res) => {
  const user = req.body;
  const id = UserService.save(user)
  res.send({ id });
})

router.get('/users', (req, res) => {
  const users = UserService.getUsers();
  res.send(users);
})

module.exports = router;