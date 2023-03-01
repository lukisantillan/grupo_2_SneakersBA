const { body } = require("express-validator");
const path = require("path");
const fs = require("fs");

module.exports = [
    body("name").notEmpty().withMessage("El producto debe tener un nombre").bail()
    .isLength({min: 5}).withMessage("El nombre del producto debe tener al menos 5 caracteres"),

    body("description").notEmpty().withMessage("La descripción del producto no puede estar vacia").bail()
    .isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),

    body("image").custom((value, {req}) => {
        if(!req.file) {
            return true;
        }

        const extentions = [".png", ".jpeg", ".jpg", ".gif"];
        const imageExtention = path.extname(req.file.originalname);

        if(extentions.indexOf(imageExtention) == -1) {
            fs.unlinkSync(path.resolve(__dirname, "../../public/img/Productos/", req.file.filename));
            throw new Error("Archivo invalido, solo se permiten los siguientes tipos de archivos: " + extentions.join(", "));
        }

        return true;
    }),

    

    body("price").notEmpty().withMessage("El precio no puede estar vacio").bail()
    .isDecimal().withMessage("El precio debe ser un numero decimal"),

    body("category").notEmpty().withMessage("El producto debe tener una categoria"),

    body("brand").notEmpty().withMessage("El producto debe tener una marca"),

    body("type").notEmpty().withMessage("Especificar el tipo de producto")
]