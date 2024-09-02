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

  async searchProducts(name) {

    const normalizeName = name[0] ? name[0].toUpperCase() + name.slice(1) : ''
    const data = await productsModel.getSearchProducts(normalizeName)
    return data
  }
}

module.exports = new ProductsService();
