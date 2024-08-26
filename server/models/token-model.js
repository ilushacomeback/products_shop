const db = require('../config/db.config');

class TokenModel {
  async getUser(userId) {
    const user = await db.query('SELECT * FROM tokens WHERE user_id=$1', [
      userId,
    ]);
    return user?.rows && user.rows[0];
  }

  async create(refreshToken, userId) {
    await db.query(
      'INSERT INTO tokens (refresh_token, user_id) VALUES ($1::text, $2)',
      [refreshToken, userId]
    );
    const user = await this.getUser(userId);
    return user;
  }

  async updateUserToken(refreshToken, userId) {
    await db.query(
      'UPDATE tokens SET refresh_token=$1::text WHERE user_id=$2',
      [refreshToken, userId]
    );
    const user = await this.getUser(userId);
    return user;
  }
}

module.exports = new TokenModel();
