const checkUser = (req, res, next) => {
    if (req.session.user == undefined) {
        return res.redirect('/register')
    } next()
}

module.exports = checkUser