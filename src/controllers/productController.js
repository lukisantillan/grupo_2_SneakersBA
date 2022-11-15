const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const product = {
    carrito: function (req, res, next) {
        res.render('productCart')
    },
    crearProducto: function (req, res, next) {
        res.render('productCreate')
    },
    detalleProdcuto: function (req, res, next) {
        res.render('productDetail')
    },
    editarProducto: function (req, res, next) {
        res.render('productEdit')
    },
    detail: (req, res) => {
		let resultado = products.find(product => product.id == req.params.id)
        res.render('productDetail', {'resultado' : resultado})
	},
};


module.exports = product