const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { validationResult } = require('express-validator');


const product = {
    cart: function (req, res, next) {
        res.render('productCart')
    },
    createProduct: function (req, res, next) {
        res.render('productCreate')
    },
    store: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render(
        'productCreate',
        {
          errors: errors.array()
        }
      )

    };
    const camposDeNuevoProducto = req.body;
    camposDeNuevoProducto.id = products.length;
    camposDeNuevoProducto.image = req.file.filename;
    products.push(camposDeNuevoProducto);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    return res.send(req.file);
  },

    detail: (req, res) => {
        const product = console.log('hola');
        const productId = req.params.productId;
        const productToFind = products.find((product) => product.id == productId);
        if (productToFind == undefined) {
          return res.send("No existe el producto");
        }
        return res.render("productDetail", { 'productToFind' : productToFind})
      },
    edit: (req, res) => {
      const productId = req.params.productId;
      const productToFind = products.find((product) => product.id == productId);

      if (productToFind == undefined) {
      return res.send("No existe el producto");
    }
    return res.render("productEdit", {productToEdit : productToFind,});
  },

  update: (req, res) => {
    const dataToUpdate = req.body;
    ;


    // Obtener el indice del producto en el array productos
    // products[0] = nuevo producto 
    const productIndex = products.findIndex(
      (product) => {
        return product.id == req.params.id
      }
    )
    if (productIndex == -1) {
      return res.send('No existe el producto')
    }
    // Actualizo array en base al indice
    // Combinar producto existente con nuevos datos a actualizar
    products[productIndex] = {
      ...products[productIndex],
      ...dataToUpdate
    }
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    return res.send(products[productIndex])
  },

    index: (req, res) => {
        const productsUrbanos = products.filter(product => product.category =='Urbana');
        const productsDeportivos = products.filter(product => product.category == 'Deportiva');
        //Devolver datos a vista
        const viewData = {
            productsUrbanos,
            productsDeportivos,
        }
        return res.render('products', viewData)
        }
};


module.exports = product