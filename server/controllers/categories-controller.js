const categoriesService = require('../service/categories-service');

class CategoriesController {
  async getCategories(req, res) {
    try {
      const categories = await categoriesService.getCategories();
      return res.json(categories);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CategoriesController();
