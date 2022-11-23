var express = require('express');
var router =  express.Router();

const productController = require('../controllers/productController')
const path = require("path");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("public/images"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      const fileExtension = path.extname(file.originalname);
      const newName = file.originalname.replace(fileExtension, "");
      cb(null, newName + "-" + uniqueSuffix + fileExtension);
    },
  });
  
  const upload = multer({ storage });

  const { body } = require("express-validator");

const validatorsMiddleware = [
  body("name").notEmpty().withMessage('El campo no puede estar vacío'),
  body("price").isNumeric()
];

/*VISTA TODOS LOS PRODUCTOS */

router.get("/", productController.index);

/*CREAR*/
router.get("/create",productController.createProduct);
router.post(
  "/",
  upload.single("image"),
  productController.store
);

/*VISUALIZAR UN PRODUCTO*/
router.get("/detail/:productId/", productController.detail);

/*EDITAR PRODUCTO*/
router.get("/edit/:productId/", productController.edit);
router.put("/:id", productController.update);

/*BORRAR PRODUCTO*/
router.delete("/delete/:productId", productController.destroy);

router.get('/cart', productController.cart)

module.exports= router;