const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/user.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const userController = {

    login: function (req, res,) {
        res.render('login');
    },

    processLogin: function (req, res,) {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON)
            }
            for (let i = 0; i < users.lenght; i++) {
                if (users[i].userName == req.body.userName) {
                    if (req.body.password == user[i].password) {
                        let usuarioALoguearse = user[i]
                        break;
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', { errors: [{ msg: 'Credenciales Invalidas' }] })
            }

            req.session.user = usuarioALoguearse

            res.render('LOGUEADO')
        } else {
            return res.render('login', { errors: errors.errors })
        }
    },

    register: function (req, res, next) {
        res.render('register')
    }


};

module.exports = userController; 