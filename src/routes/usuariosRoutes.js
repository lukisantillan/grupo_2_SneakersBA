const express = require('express');
const router = express.Router();
const path = require('path');


const db = require('../database/models');

const User = db.User;





const bcrypt = require('bcryptjs');

const fs = require('fs');

const multer = require('multer');

const {
    check,
    validationResult,
    body
} = require('express-validator');

const userController = require(path.resolve(__dirname, '../controllers/userController'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/usuarios'));    
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname)); 
    }
  })
   
const upload= multer({ storage })


router.get('/cart' ,userController.cart);
router.get('/login',userController.login);
router.post('/ingresar', [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], userController.ingresar);


router.get('/registro', userController.registro);

User.findAll()
    .then((users) => {

    router.post('/registro', upload.single('avatar'),[
 
      check('first_name').isLength({
            min: 1
          }).withMessage('El campo nombre no puede estar vacío'),
      check('last_name').isLength({min: 1   
          }).withMessage('El campo apellido no puede estar vacío'),
      check('email').isEmail().withMessage('Agregar un email válido'),


      check('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres al menos una letra y un número'),

      body('email').custom(function (value) {
        let contador = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == value) {
                contador++;
            }
        }
        if (contador > 0) {
            return false;   
        } else {
            return true;  
        }
      }).withMessage('Usuario ya se encuentra registrado'),

    check('confirm_password').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),


    body('confirm_password').custom((value, {req}) =>{
            if(req.body.password == value ){
                return true        
            }else{
                return false  
            }    
    }).withMessage('Las contraseñas deben ser iguales'),

    body('avatar').custom(function (value, { req }) {
      let ext
      if(req.file != undefined ){
          return true
      }else{
          ext = ""+path.extname(req.files[0].filename).toLowerCase();
      }

      if (
          ext == ".jpg" ||
          ext == ".jpeg" ||
          ext == ".png" ||
          ext == ".gif"){
              return true;
          }
          return false;
    }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')
    ], userController.create)
  })
  .catch((errors) => {
      console.log(errors);
})

router.get('/logout', userController.logout);

module.exports = router;