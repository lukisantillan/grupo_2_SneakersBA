const path = require('path');
const db = require('../database/models');
const Product = db.Product;

module.exports = {
    index: (req,res) =>{
        Product.findAll()
        .then(shoes =>{
            return res.render(path.resolve(__dirname, '../views/products/products'), {shoes})
        })
        .catch(error => res.send(error))        
    },
}