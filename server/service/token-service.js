const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');
const tokenModel = require('../models/token-model')
const jwtConfig = require('../config/auth.config');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, jwtConfig.accessToken.salt, {
      expiresIn: jwtConfig.accessToken.expired,
    });
    const refreshToken = jwt.sign(payload, jwtConfig.refreshToken.salt, {
      expiresIn: jwtConfig.refreshToken.expired,
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const user = await userModel.getUser({ userId });

    if (user) {
      return await tokenModel.updateUserToken(refreshToken, userId);
    }
  }
}

module.exports = new TokenService();
