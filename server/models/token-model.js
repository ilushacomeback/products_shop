const db = require('../config/db.config');
const userModel = require('./user-model');

class TokenModel {
  async updateUserToken(refreshToken, userId) {
    try {
      console.log(userId, refreshToken);
      await db.query(
        'UPDATE users SET refresh_token=$1::text WHERE id=$2',
        [refreshToken, userId]
      );
      const user = await userModel.getUser({ userId });
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TokenModel();
