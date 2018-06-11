var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

require('../models/modelsTorneo');
const mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');


passport.serializeUser(function (user, done) {
	done(null,user.id);
});

passport.deserializeUser(function(id, done){
    Usuario.findById(id).then((user) => {
        done(null, user);
	});
});


passport.use(new FacebookStrategy({
clientID: "2129139427315940",
clientSecret: "51c0d4fe67a5b8a2b647c84eda6fb22e",
callbackURL: "https://ligadefutbol.herokuapp.com/auth/facebook/callback",
profileFields: ['id', 'displayName','emails']
}, function(accessToken, refreshToken, profile, done) {
	process.nextTick(function(){
		Usuario.findOne({'facebookID': profile.id}, function(err, currentUser) {
			if (err)
				return done(err);
			else {
			    if(!currentUser) {
			    	var mail = profile.emails[0].value;
			    	var newUser = null;
			    	
			    	if (mail == "juuan.olmedo@hotmail.com"){
			    		newUser = new Usuario({
			            facebookID: profile.id,
			            mail: profile.emails[0].value,
			            nombre: profile.displayName,
			            esEditor : true,
			            partidosAsignados : []
						});
			    	} else {
			    		newUser = new Usuario({
			            facebookID: profile.id,
			            mail: profile.emails[0].value,
			            nombre: profile.displayName,
			            esEditor : false
						});
			    	}

			        newUser.save(function(err, newUser) {
			            if(err) return done(err);
			            done(null,newUser);
			        });
			    } else {
			        done(null, currentUser);
			    }
			}
		});
	});
}));
