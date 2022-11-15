const userController = {

    login:  function(req, res,) {
        res.render('login');
    },

    register:  function(req, res, next) {
        res.render('register')
    }


};

module.exports = userController; 