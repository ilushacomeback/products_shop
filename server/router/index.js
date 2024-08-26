const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const productsController = require('../controllers/products-controller');
const categoriesController = require('../controllers/categories-controller');
const basketController = require('../controllers/basket-controller');
const router = new Router();
const { body } = require('express-validator');

router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 8, max: 32 }),
  userController.register
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.get('/products', productsController.getPaginationProducts);
router.get('/categories', categoriesController.getCategories);
router.get('/basket', basketController.getProductsForBasket);
router.get('/basket/:id', basketController.getBasket);
router.patch('/basket/:id', basketController.addProducts)

module.exports = router;
