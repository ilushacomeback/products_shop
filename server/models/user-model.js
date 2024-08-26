const db = require('../config/db.config');

class UserModel {
  async getUser(dataUser) {
    try {
      if (dataUser.email) {
        const user = await db.query(
          'SELECT * FROM users WHERE email=$1::text',
          [dataUser.email]
        );
        return user && user.rows[0];
      }
      const user = await db.query('SELECT * FROM users WHERE id=$1', [
        dataUser.userId,
      ]);
      return user && user.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async addUser(username, email, hashPassword) {
    try {
      await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1::text, $2::text, $3::text)',
        [username, email, hashPassword]
      );
      const user = await this.getUser({ email });
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserModel();