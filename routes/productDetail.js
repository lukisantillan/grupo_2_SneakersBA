var express = require('express');
var router =  express.Router();
const productDetailController = require('../controllers/productDetailController')

router.get('/', productDetailController.detalleProdcuto)

module.exports= router;