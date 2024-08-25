const userService = require('../service/user-service');

class UserController {
  async register(req, res, next) {
    try {
      const { email, password, username } = req.body;
      const userData = await userService.register(username, email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(['12', '12']);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
