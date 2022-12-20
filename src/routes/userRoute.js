var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
const userController = require('../controllers/userController')
const checkUser = require('../middlewares/authMiddleware')


router.get('/login', userController.login);
router.post('/login', [check("email").isEmail(), check("password").isLength({ min: 8 })], userController.processLogin)
router.get('/register', userController.register)
router.post('/register', [check("password").isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),check("email").isEmail()], userController.processRegister)

module.exports = router;