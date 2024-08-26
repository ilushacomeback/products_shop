const db = require('../config/db.config');

class ProductsModel {
  async getCount(category) {
    if (category) {
      const count = await db.query(
        `SELECT COUNT(*) FROM products WHERE category=$1::text`,
        [category]
      );
      return parseInt(count.rows[0].count);
    } else {
      const count = await db.query('SELECT COUNT(*) FROM products');
      return parseInt(count.rows[0].count);
    }
  }

  async getProducts(offset, limit, category) {
    if (category) {
      const data = await db.query(
        'SELECT * FROM products WHERE category=$1::text ORDER BY id LIMIT $2 OFFSET $3',
        [category, limit, offset]
      );
      return data.rows;
    } else {
      const data = await db.query(
        'SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2',
        [limit, offset]
      );
      return data.rows;
    }
  }
}

module.exports = new ProductsModel();
