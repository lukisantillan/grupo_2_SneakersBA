var express = require('express');
var router =  express.Router();
const productController = require('../controllers/productController')

router.get('/carrito', productController.carrito)
router.get('/editar-producto', productController.editarProducto)
router.get('/detalle/:id', productController.detail)
router.get('/crear-producto', productController.crearProducto)

module.exports= router;