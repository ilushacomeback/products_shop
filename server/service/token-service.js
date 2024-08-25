const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const user = await userModel.getUser({ userId });
    console.log('user',user)
    if (user) {
      return await userModel.updateUserToken(refreshToken, userId);
    }
  }
}

module.exports = new TokenService();
