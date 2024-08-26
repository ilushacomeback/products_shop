const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const productsController = require('../controllers/products-controller');
const categoriesController = require('../controllers/categories-controller');
const router = new Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.get('/products', productsController.getPaginationProducts);
router.get('/categories', categoriesController.getCategories);

module.exports = router;
