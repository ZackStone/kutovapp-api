var Usuario = require('../models/usuario');
var express = require('express');
var jwt = require('jwt-simple');
var config = require('../config/database'); // get db config file

var routes = express.Router();

routes.post('/login', function(req, res) {
	Usuario.findOne({
		email: req.body.email
	}, function(err, usuario) {
		if (err) throw err;
 
		if (!usuario) {
			res.send({success: false, msg: 'E-mail não cadastrado.'});
		} else {
			// verifica se a senha está correta
			usuario.verificarSenha(req.body.senha, function (err, isMatch) {
				if (isMatch && !err) {

					// cria o token
					var token = jwt.encode(usuario, config.secret);
					// retorna a informação com o token em JSON
					res.json({success: true, token: 'JWT ' + token, id: usuario._id});

				} else {
					res.send({success: false, msg: 'Senha incorreta.'});
				}
			});
		}
	});
});

module.exports = routes;