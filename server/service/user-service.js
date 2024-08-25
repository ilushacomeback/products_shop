const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const tokenService = require('./token-service');
const UserDTO = require('../dtos/user-dto');

class UserService {
  async register(username, email, password) {
    const dataUser = await userModel.getUser({ email });
    if (dataUser) {
      throw new Error('this email zanyat');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await userModel.addUser(username, email, hashPassword);
    const userDTO = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDTO });
    await tokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { ...tokens, user: userDTO };
  }
}

module.exports = new UserService();
