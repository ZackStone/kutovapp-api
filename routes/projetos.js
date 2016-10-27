var express = require('express');
var projetosCtrl = require('../controllers/projetos.js');

var router = express.Router();

// Rotas para as requisiçoes de get e post
router.route('/').get(projetosCtrl.getProjetos);
router.route('/').post(projetosCtrl.postProjeto);

router.route('/:id')
	.get(projetosCtrl.getProjeto)
	.put(projetosCtrl.putProjeto)
	.delete(projetosCtrl.deleteProjeto);

module.exports=router;
