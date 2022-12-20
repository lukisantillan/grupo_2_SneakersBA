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
        
    },

    register: function (req, res, next) {
        res.render('register')
    },

    processRegister: function(req, res) {
        let registerData = req.body;
        registerData.password = bcrypt.hashSync(registerData.password, saultRounds)

        const campoDeNuevoUsuario = req.body;
        usersJSON.push(campoDeNuevoUsuario);
    
        fs.writeFileSync(usersFilePath, JSON.stringify(usersJSON, null, 2));

        res.render('userView',{campoDeNuevoUsuario : campoDeNuevoUsuario} )
    }


};

module.exports = userController; 