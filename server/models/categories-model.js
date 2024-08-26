const db = require('../config/db.config');

class CategoriesModel {
  async getCategories() {
    try {
      const categories = await db.query('SELECT * FROM categories');
      return categories.rows;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CategoriesModel();
