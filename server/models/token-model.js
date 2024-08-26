const db = require('../config/db.config');

class TokenModel {
  async getUser(userId) {
    try {
      const user = await db.query('SELECT * FROM tokens WHERE user_id=$1', [
        userId,
      ]);
      return user?.rows && user.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async create(refreshToken, userId) {
    try {
      await db.query(
        'INSERT INTO tokens (refresh_token, user_id) VALUES ($1::text, $2)',
        [refreshToken, userId]
      );
      const user = await this.getUser(userId);
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async updateUserToken(refreshToken, userId) {
    try {
      await db.query(
        'UPDATE tokens SET refresh_token=$1::text WHERE user_id=$2',
        [refreshToken, userId]
      );
      const user = await this.getUser(userId);
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TokenModel();
