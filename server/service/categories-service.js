const categoriesModel = require('../models/categories-model');

class CategoriesService {
  async getCategories() {
    const data = await categoriesModel.getCategories();
    return { data };
  }
}

module.exports = new CategoriesService();
