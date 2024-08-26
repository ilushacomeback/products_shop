const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const tokenService = require('./token-service');
const UserDTO = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
  async register(username, email, password) {
    const dataUser = await userModel.getUser(email);
    if (dataUser) {
      throw ApiError.BadRequest(
        `Пользователь с таким email: '${email}' - занят`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await userModel.addUser(username, email, hashPassword);
    const userDTO = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDTO });
    await tokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { ...tokens, user: userDTO };
  }

  async login(email, password) {
    const user = await userModel.getUser(email);
 
    if (!user) {
      throw ApiError.BadRequest('Пользователь не зарегистрирован');
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неправильный пароль');
    }

    const userDTO = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDTO });
    await tokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { ...tokens, user: userDTO };
  }
}

module.exports = new UserService();
