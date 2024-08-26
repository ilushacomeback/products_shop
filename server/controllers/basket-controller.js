const basketService = require('../service/basket-service');

class BasketController {
  async getProductsForBasket(req, res) {
    const { id: ids } = req.query;
    const data = await basketService.getProducts(ids);
    return res.json(data);
  }

  async getBasket (req, res) {
    const { id } = req.params
    const basket = await basketService.getBasket(id)
    return res.json(basket)
  }

  async addProducts (req, res) {
    const { basket } = req.body
    const { id } = req.params

    if (!basket) {
        return res.end()
    }
    const data = await basketService.addProducts(id, basket)
    res.json(data)
  }
}

module.exports = new BasketController();
