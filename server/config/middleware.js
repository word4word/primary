var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');
var configAuth = require("./auth")
var session = require('express-session')




module.exports = function (app, express) {

	passport.serializeUser(function (user, done) {
	  console.log(user)
	  done(null, user)
	})

	passport.deserializeUser(function (obj, done) {
	  done(null,obj)
	})
	app.use(function(req, res, next) {
	  res.setHeader('Access-Control-Allow-Origin', '*')
	  //res.setHeader('Content-Type', 'application/JSON')
	  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTION")
	  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	  next()
	})
	app.use(session({
	  secret: configAuth.secret,
	  resave: true,
	  saveUninitialized: true
	}));
	app.use(express.static("../dist"))
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(passport.initialize());
	app.use(passport.session());
	app.get('/auth/facebook',passport.authenticate('facebook'));
	app.get('/auth/facebook/return',passport.authenticate('facebook',{successRedirect: '/#/',failureRedirect: '/#/fail'}));
};
