const express = require('express');
const controller = require('./products.controller');
const validator = require('./products.validation');

const router = express.Router();

router.post('/', validator.createProduct, controller.createProduct);
router.get('/', controller.getProducts);
router.get('/:id', validator.getProduct, controller.getProductData);

module.exports = router;