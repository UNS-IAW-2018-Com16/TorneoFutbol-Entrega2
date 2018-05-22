const isAuthenticated = function (req, res, next) {

    if (req.isAuthenticated() && req.user.esEditor)
        return next();

    res.redirect('/');
}
module.exports = isAuthenticated;