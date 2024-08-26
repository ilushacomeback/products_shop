const db = require('../config/db.config');

class BasketModel {
  async createBasket(id) {
    await db.query('INSERT INTO baskets (id, basket) VALUES ($1, $2::text)', [id, JSON.stringify({})]);
    const basket = await this.getBasket(id);
    return basket;
  }

  async updateBasket(id, basket) {
    await db.query('UPDATE baskets SET basket=$1 WHERE id=$2', [basket, id])
    const updateBasket = await this.getBasket(id)
    return updateBasket
  }

  async getProducts(ids) {
    if (!ids) return
    const products = await db.query(
      `SELECT * FROM products WHERE id IN (${ids.join(',')})`
    );
    return products.rows;
  }

  async getBasket(id) {
    const basketUser = await db.query('SELECT * FROM baskets WHERE id=$1', [
      id,
    ]);
    return basketUser.rows[0].basket;
  }
}

module.exports = new BasketModel();
