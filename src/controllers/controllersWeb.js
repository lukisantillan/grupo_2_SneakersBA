const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;
module.exports = {
    index: function(req,res){
        Product.findAll()
            .then(shoes => res.render(path.resolve(__dirname, '..', 'views','web','index'),{shoes}))
            .catch(err => res.send(err))
    }}