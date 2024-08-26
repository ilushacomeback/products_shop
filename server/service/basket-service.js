const basketModel = require('../models/basket-model');

class BasketService {
  async getProducts(ids) {
    const data = await basketModel.getProducts(ids);
    return { data };
  }

  async getBasket(id) {
    const userBasket = await basketModel.getBasket(id);

    if (userBasket) {
      const data = JSON.parse(userBasket);
      return { data };
    }

    const basket = await basketModel.createBasket(id)
    return basket
  }

  async addProducts(id, basket) {
    const data = await basketModel.updateBasket(id, basket)
    return data
  }
}

module.exports = new BasketService();
