const productsService = require('../service/products-service');

class ProductController {
  async getPaginationProducts(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const category = req.query.category;
      const limit = parseInt(req.query.limit) || 10;
      const data = await productsService.getPagination(page, limit, category);
      return res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async searchProducts(req, res, next) {
    try {
      const { name } = req.body;
      const products = await productsService.searchProducts(name);
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
