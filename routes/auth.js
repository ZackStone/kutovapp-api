var Usuario = require('../models/usuario');
var express = require('express');
var jwt = require('jwt-simple');
var config = require('../config/database'); // get db config file
var passport = require('passport');

// bundle our routes
var apiRoutes = express.Router();

// Rota requer autenticação
var midauth = require('../config/middlewareAuth');
midauth(apiRoutes);

apiRoutes.get('/teste', function(req, res){
	res.json({success: true, msg: 'testando teste!'});
});

// create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function(req, res) {
	if (!req.body.name || !req.body.password) {
		res.json({success: false, msg: 'Please pass name and password.'});
	} else {
		var newUser = new Usuario({
			name: req.body.name,
			password: req.body.password
		});
		// save the user
		newUser.save(function(err) {
			if (err) {
				return res.json({success: false, msg: 'Username already exists.'});
			}
			res.json({success: true, msg: 'Successful created new user.'});
		});
	}
});

// route to a restricted info (GET http://localhost:8080/api/memberinfo)
apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		var decoded = jwt.decode(token, config.secret);
		Usuario.findOne({
			email: decoded.email
		}, function(err, user) {
				if (err) throw err;
 
				if (!user) {
					return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
				} else {
					res.json(user);
				}
		});
	} else {
		return res.status(403).send({success: false, msg: 'No token provided.'});
	}
});

apiRoutes.post('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		var decoded = jwt.decode(token, config.secret);
		Usuario.findOne({
			email: decoded.email
		}, function(err, user) {
				if (err) throw err;
 
				if (!user) {
					return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
				} else {
					res.json(user);
				}
		});
	} else {
		return res.status(403).send({success: false, msg: 'No token provided.'});
	}
});

module.exports = apiRoutes;