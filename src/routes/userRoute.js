var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
const userController = require('../controllers/userController')
const checkUser = require('../middlewares/authMiddleware')


router.get('/login', userController.login);
router.post('/login', [check("email").isEmail(), check("password").isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')], userController.processLogin)
router.get('/register', userController.register)

module.exports = router;