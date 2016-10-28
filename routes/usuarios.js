var express = require('express');
var usuariosCtrl = require('../controllers/usuarios.js');

var router = express.Router();

router.route('/')
	.get(usuariosCtrl.getUsuarios)
	.post(usuariosCtrl.postUsuario);

router.route('/:id')
	.put(usuariosCtrl.putUsuario)
	.get(usuariosCtrl.getUsuario)
	.delete(usuariosCtrl.deleteUsuario);

module.exports = router;
