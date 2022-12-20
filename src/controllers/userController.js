const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt')

const usersFilePath = path.join(__dirname, '../data/user.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const saultRounds = 10;


const userController = {

    login: function (req, res,) {
        res.render('login');
    },

    processLogin: function (req, res,) {
        
    const loginData = req.body;
    // Buscar al usuario en JSON mediante nombre de usuario 
    const existentUser = usersJSON.find(user => user.userName == req.body.userName )
    // Usuario con ese email no existe
    if (!existentUser) {
        return res.send('No existe un usuario');
    }
    // Usuario si existe
    // Comparar clave ingresada con clave en JSON
    const isValidPassword =
        bcrypt.compareSync(loginData.password, existentUser.password);

        console.log(existentUser.password)
        console.log(loginData.password)
    
    // Si el password no es válido
    if (!isValidPassword) {
        let passwordIncorrect = 'Contraseña Incorrecta'
        return res.render('login', {passwordIncorrect : passwordIncorrect})
    }

    req.session.user = existentUser;

    res.render('userViewLogin',{existentUser : existentUser} )
        
    },

    register: function (req, res, next) {
        res.render('register')
    },

    processRegister: function(req, res) {
        let registerData = req.body;
        registerData.password = bcrypt.hashSync(registerData.password, saultRounds)

        const campoDeNuevoUsuario = req.body;
        camposDeNuevoProducto.image = req.file.filename;
        usersJSON.push(campoDeNuevoUsuario);
    
        fs.writeFileSync(usersFilePath, JSON.stringify(usersJSON, null, 2));

        res.render('userView',{campoDeNuevoUsuario : campoDeNuevoUsuario} )
    }


};

module.exports = userController; 