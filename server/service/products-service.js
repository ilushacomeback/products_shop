const productsModel = require('../models/products-model');

class ProductsService {
  async getPagination(page, limit, category) {
    const count = await productsModel.getCount(category);
    const totalPages = Math.ceil(count / limit);
    const offset = (page - 1) * limit;
    const data = await productsModel.getProducts(offset, limit, category);
    return {
      data,
      meta: {
        totalPages,
        curPage: page,
      },
    };
  }
}

module.exports = new ProductsService();
