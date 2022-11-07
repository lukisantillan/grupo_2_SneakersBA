var express = require('express');
var router =  express.Router();
const productEditController = require('../controllers/productEditController')

router.get('/', productEditController.editarProducto)

module.exports= router;