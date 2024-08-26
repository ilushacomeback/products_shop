const categoriesModel = require('../models/categories-model');

class CategoriesService {
  async getCategories() {
    const categories = await categoriesModel.getCategories();
    return { data: categories };
  }
}

module.exports = new CategoriesService();
