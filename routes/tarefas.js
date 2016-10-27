var express = require('express');
var tarefasCtrl = require('../controllers/tarefas.js');

var router = express.Router();

// Rotas para as requisiçoes de get e post
router.route('/').get(tarefasCtrl.getTarefas);
router.route('/').post(tarefasCtrl.postTarefa);

router.route('/do-projeto/:id').get(tarefasCtrl.getTarefasDoProjeto)
	.get(tarefasCtrl.getTarefasDoProjeto);

router.route('/:id')
	.get(tarefasCtrl.getTarefa)
	.put(tarefasCtrl.putTarefa)
	.delete(tarefasCtrl.deleteTarefa);

module.exports=router;
