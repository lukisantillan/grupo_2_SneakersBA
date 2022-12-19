function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }

    next();
}

module.exports = userLoggedMiddleware;


//middleware de aplicacion para determinar si se ve o no el menu en la nav bar al loguearse // 