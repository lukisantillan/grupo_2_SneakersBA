const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
  check,
  validationResult,
  body
} = require('express-validator');


const db = require('../database/models/');


const User = db.User;
const Product = db.Product;



const userController = {

  view: function (req, res) {
    res.render(path.resolve(__dirname, '../views/usuarios/userView'));
  },

  login: function (req, res) {
    res.render(path.resolve(__dirname, '../views/usuarios/login'));
  },
  ingresar: (req, res) => {

    db.User.findAll()
      .then((users) => {

        let errors = validationResult(req);

        let usuarioLogueado = [];

        if (req.body.email != '' && req.body.password != '') {
          usuarioLogueado = users.filter(function (user) {
            return user.email === req.body.email
          });

          if (bcrypt.compareSync(req.body.password, usuarioLogueado[0].password) === false) {
            usuarioLogueado = [];
          }
        }

        if (usuarioLogueado.length === 0) {
          return res.render(path.resolve(__dirname, '../views/usuarios/login'), { errors: [{ msg: "Credenciales invalidas" }] });
        } else {

          req.session.usuario = usuarioLogueado[0];
        }

        if (req.body.remember) {
          res.cookie('email', usuarioLogueado[0].email, { maxAge: 1000 * 60 * 60 * 24 })
        }
        let nombre = usuarioLogueado[0].dataValues.firstName
        let apellido = usuarioLogueado[0].dataValues.lastName
        let email = usuarioLogueado[0].dataValues.email
        let avatar = usuarioLogueado[0].dataValues.avatar
        let datos = [{ nombre: nombre, apellido: apellido, email : email, avatar : avatar }]
        console.log(datos)

        
        res.render(path.resolve(__dirname, '../views/usuarios/userView'), {datos : datos});
      })

  },

  registro: function (req, res) {
    res.render(path.resolve(__dirname, '../views/usuarios/registro'));
  },

  create: (req, res) => {

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
        errors: errors.errors, old: req.body
      });
    }


    let user = {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file ? req.file.filename : '',
      role: 1
    };

    User
      .create(user)
      .then((storedUser) => {
        return res.redirect('/login');
      })
      .catch(error => console.log(error));
  },

  logout: (req, res) => {
    req.session.destroy();
    res.cookie('email', null, { maxAge: -1 });
    res.redirect('/')
  },

  cart: function (req, res) {
    res.render(path.resolve(__dirname, '../views/products/productCart'));
  },
  show: (req, res) => {
    Product.findByPk(req.params.id, {
      include: [{ association: 'category' }]
    })
      .then(myShoe => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productDetail'), { myShoe })
      })
      .catch(error => res.send(error))
  },
}
module.exports = userController;
