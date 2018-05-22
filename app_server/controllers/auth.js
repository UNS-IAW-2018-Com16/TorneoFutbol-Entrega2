var passport = require('passport');

const facebookLogin = passport.authenticate('facebook', {scope: ["email"]});

const facebookCallback = passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/'});

const facebookLogout = function (req, res){
	req.logout();
	res.redirect('/');
}

module.exports = { facebookLogin, facebookCallback, facebookLogout };