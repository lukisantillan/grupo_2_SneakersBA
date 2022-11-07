var express = require('express');
var router =  express.Router();
const productCartController = require('../controllers/productCartController')

router.get('/', productCartController.carrito)

module.exports= router;