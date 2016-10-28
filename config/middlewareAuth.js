var jwt = require('jwt-simple');
var passport = require('passport');
var config = require('../config/database'); // get db config file
var Usuario = require('../models/usuario');

getToken = function (headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};

function validarToken(routes) {
	// todos os métodos HTTP solicitados da rota passada por parametro vão executar esta fn
	routes.use(passport.authenticate('jwt', { session: false}), function(req, res, next) {
		var token = getToken(req.headers);
		if (token) {
			var decoded = jwt.decode(token, config.secret);
			Usuario.findOne({
				email: decoded.email
			}, function(err, user) {
					if (err) throw err;
	 
					if (!user) {
						return res.status(403).send({
							success: false, 
							msg: 'Falha na autenticação. Usuário não encontrado.'
						});
					} else {
						next(); // executa o método HTTP solicitado
					}
			});
		} else {
			return res.status(403).send({success: false, msg: 'Token não informado.'});
		}
	});
}

module.exports = validarToken;