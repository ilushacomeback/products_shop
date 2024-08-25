const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const pool = require('../models/db-model');
const router = new Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.get('/products', async (req, res) => {
  const { page } = req.query;
  if (page === '1') {
    const data = await pool.query(
      `SELECT * FROM products ORDER BY id ASC LIMIT 10`
    );
    res.json(data.rows);
  } else {
    const data = await pool.query(
      `SELECT * FROM products ORDER BY id ASC LIMIT 10 OFFSET ${(page - 1) * 10}`
    );
    res.json(data.rows)
  }
});

module.exports = router;
