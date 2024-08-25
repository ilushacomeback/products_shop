const registerUser = require('../utils/registerUser');
const pool = require('./db-model')

class UserModel {
  async getUser(dataUser) {
    if (dataUser.email) {
      const user = await pool.query(
        `SELECT * FROM users WHERE email='${dataUser.email}'`
      );
      return user && user.rows[0];
    }
    const user = await pool.query(
      `SELECT * FROM users WHERE id='${dataUser.userId}'`
    );
    return user && user.rows[0];
  }

  async addUser(username, email, hashPassword) {
    await pool.query(registerUser(username, email, hashPassword));
    const user = await this.getUser({ email });
    return user;
  }

  async updateUserToken(refreshToken, userId) {
    await pool.query(
      `UPDATE users SET refresh_token='${refreshToken}' WHERE id=${userId}`
    );
    const user = await this.getUser({ userId });
    return user;
  }
}

module.exports = new UserModel();
