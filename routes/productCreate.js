var express = require('express');
var router =  express.Router();
const productCreateController = require('../controllers/productCreateController')

router.get('/', productCreateController.crearProducto)

module.exports= router;