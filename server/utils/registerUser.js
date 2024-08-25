const registerUser = (username, email, password) => {
  return `INSERT INTO users
  (username, email, password)
  VALUES ('${username}', '${email}', '${password}')`;
};

module.exports = registerUser
