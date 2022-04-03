
const users = [];

const saveUser = (user) => {
  user.id = Date.now();
  users.push(user);
  return user.id;
}

const getUsers = () => {
  return users;
}

module.exports = {
  saveUser,
  getUsers
}