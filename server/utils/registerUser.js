const registerUser = (user) => {
  return `INSERT INTO users
  (username, email, password)
  VALUES ('${user.username}', '${user.email}', '${user.password}')`;
};

module.exports = {
    registerUser
}
