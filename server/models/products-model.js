const db = require('../config/db.config');

class ProductsModel {
  async getCount(category) {
    try {
        console.log('count', category)
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
    } catch (e) {
      console.log(e);
    }
  }

  async getProducts(offset, limit, category) {
    try {
      if (category) {
        const data = await db.query(
          "SELECT * FROM products WHERE category=$1::text ORDER BY id LIMIT $2 OFFSET $3",
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
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ProductsModel();
