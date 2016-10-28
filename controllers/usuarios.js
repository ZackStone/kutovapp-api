var Usuario = require('../models/usuario');

function getUsuarios(req,res) {
	Usuario.find(function (err, usuarios) {
		if (err) {
			res.send(err);
		} else {
			res.json(usuarios);
		}
	});
}

function getUsuario(req,res){
	Usuario.findOne({ _id: req.params.id }, function (err, usuario) {
		if (err)
			res.send(err);

		res.json(usuario);
	});
}

function postUsuario(req, res) {
	var usuario = new Usuario(req.body);
	usuario.save(function (err) {
		if (err) {
			res.send({ message: 'Ocorreu um erro ao tentar salvar o usuário.' });
			//console.log(err);
		} else {
			res.send({ success: true, message: 'Usuário cadastrado. Aguarde a liberação do administrador.',
				idUsuario: usuario._id, usuario: usuario });
		}
	});
}

function putUsuario(req, res) {
	Usuario.findOne({ _id: req.params.id }, function (err, usuario) {

		if (err)
			res.send(err);

		for (var prop in req.body) {
			usuario[prop] = req.body[prop];
		}

		// save the usuario
		usuario.save(function (err) {
			if (err)
				res.send(err);

			res.json({ message: 'Usuário atualizado.', idUsuario: usuario._id, usuario: usuario });
		});

	});
}

function deleteUsuario(req, res) {
	Usuario.remove({
		_id: req.params.id
	}, function (err, usuario) {
		if (err){
			res.send(err);
		} else {
			res.json({ success: true, message: 'Usuario deletado com sucesso.' });
		}
	});
}

module.exports = {
	getUsuarios: getUsuarios,
	getUsuario: getUsuario,
	postUsuario: postUsuario,
	putUsuario: putUsuario,
	deleteUsuario: deleteUsuario
}