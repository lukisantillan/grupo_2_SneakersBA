const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require(path.resolve(__dirname, '..', 'controllers', 'productController'));

router.get('/productos', productController.index)

module.exports = router;