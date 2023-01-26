const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require(path.resolve(__dirname, '..', 'controllers', 'productController'));
const userController = require(path.resolve(__dirname, '..', 'controllers', 'userController'));

router.get('/productos', productController.index)
router.get('/productos/detail/:id', userController.show);

module.exports = router;