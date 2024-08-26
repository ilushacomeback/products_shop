const categoriesModel = require('../models/categories-model');

class CategoriesService {
  async getCategories() {
    try {
      const categories = await categoriesModel.getCategories();
      return { data: categories };
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CategoriesService();
