var configAuth = require("./auth")
var FacebookStrategy = require("passport-facebook").Strategy;
var User = require('../models/user')
var mongoose = require('mongoose')
var config = require("../models/config.js")




module.exports = function(passport,app){
	var userId;
	passport.use(new FacebookStrategy({
    clientID: configAuth.appId,
    clientSecret: configAuth.appSecret,
    callbackURL: "/auth/facebook/return",
    passReqToCallback : true
  },
  function(req, token, refreshToken, profile, done) {
	  var query = {
	    'facebookId': profile.id
	  };

	  User.findOne(query).then(user => {
	    if (user) {
	      done(null, user)
	    } else {
	      var newUser = {}
	      newUser.facebookId = profile.id
	      newUser.name = profile.displayName
	      newUser.profilePic = `http://graph.facebook.com/${profile.id}/picture?width=400&height=400`
	      newUser.token = token
	      new User(newUser).save((err,user) => {
	        if(err){
	          console.log(err)
	        }
	        done(null, user)
	      })
	    }
	  	}).catch(err => {
	  		console.log("nahh")
	    	throw err
	  	})
	}));



}


