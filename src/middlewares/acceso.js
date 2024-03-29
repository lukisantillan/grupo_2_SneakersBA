//**Middleware controlo el acceso del usuario usando Sequelize**/

const fs = require('fs');
const path = require('path');

//------- Sequelize ----------------//

const { User} = require('../database/models');


module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = undefined;
    
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        User.findOne({
            where: {
               email: req.cookies.email
            }
        })
        .then(user =>{
            req.session.usuario = user;
            res.locals.usuario = req.session.usuario; 
            return next();
        })
                
    }else{
        return next();
    }
}
