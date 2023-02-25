const { body } = require("express-validator");

module.exports = [
    body("email").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isEmail().withMessage("Debes escribir un formato de correo válido"),

    body("password").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isLength({ min: 8 }).withMessage("Tu contraseña debe tener al menos 8 caracteres"),
]