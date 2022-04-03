const UserRepository = require('./UserRepository');

const save = (user) => {
  return UserRepository.saveUser(user);
}

const getUsers = () => {
  return UserRepository.getUsers();
}


module.exports = {
  save,
  getUsers
}