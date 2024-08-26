const db = require('../config/db.config');

class CategoriesModel {
  async getCategories() {
    const categories = await db.query('SELECT * FROM categories');
    return categories.rows;
  }
}

module.exports = new CategoriesModel();
