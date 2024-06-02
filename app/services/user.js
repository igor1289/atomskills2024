const users = [
  {
    id: 1,
    name: "user1",
    password: "123",
  },
  {
    id: 2,
    name: "user2",
    password: "111",
  },
];

function findUserByName(name) {
  return users.find((user) => user.name == name);
}

function validatePassword(user, password) {
  return user.password == password;
}

module.exports = {
  findUserByName: findUserByName,
  validatePassword: validatePassword,
};
