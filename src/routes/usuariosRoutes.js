const express = require('express');
const router = express.Router();
const path = require('path');


const db = require('../database/models');

const User = db.User;


const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require('../middlewares/registerValidation')


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
      cb(null, path.resolve(__dirname, '../../public/images/avatars'));    
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname)); 
    }
  })
   
const upload= multer({ storage })

/* Metodos !! */

router.get('/cart' ,userController.cart);

router.get('/login',userController.login);

router.post('/ingresar', loginValidations , userController.ingresar);

router.get('/profile',userController.view);

router.get('/registro', userController.registro);

router.post("/registro", upload.single("avatar"), registerValidations, userController.create);

router.get('/logout', userController.logout);

module.exports = router;