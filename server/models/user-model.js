const db = require('../config/db.config');

class UserModel {
  async getUser(email) {
    const user = await db.query('SELECT * FROM users WHERE email=$1::text', [
      email,
    ]);
    return user && user.rows[0];
  }

  async addUser(username, email, hashPassword) {
    await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1::text, $2::text, $3::text)',
      [username, email, hashPassword]
    );
    const user = await this.getUser({ email });
    return user;
  }
}

module.exports = new UserModel();
