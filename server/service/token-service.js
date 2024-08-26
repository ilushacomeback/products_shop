const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model');
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
    const user = await tokenModel.getUser(userId);

    if (user) {
      const dataUser = await tokenModel.updateUserToken(refreshToken, userId);
      return dataUser
    }

    const token = await tokenModel.create(refreshToken, userId);
    return token;
  }
}

module.exports = new TokenService();
