var Tarefa = require('../models/tarefa');

function getTarefas(req,res){
  	Tarefa.find(function(err,tarefas){
		if(err){
			res.send({err : err, flagError: true});
		} else {
			res.json(tarefas);
		}
  	});
}

function getTarefasDoProjeto(req,res){
  	Tarefa.find({projeto:req.params.id}, function(err,tarefas){
		if(err){
			res.send({err : err, flagError: true});
		} else {
			res.json(tarefas);
		}
  	});
}

function postTarefa(req, res) {

	var tarefa = new Tarefa(req.body);

	tarefa.save(function(err){
		if(err){
			res.send({message: 'Ocorreu um erro ao tentar salvar a tarefa.', err:err});
			// console.log(err);
		} else {
			res.send({success: true, message:'Tarefa adicionada.', idServico: tarefa._id, tarefa: tarefa});
		}
	});
}

function getTarefa(req,res){
	Tarefa.findOne({_id:req.params.id}, function(err,tarefa){
		if(err){
			res.send(err);
		} else {
			res.json(tarefa);
		}
	});
}

function putTarefa(req,res){
	Tarefa.findOne({_id:req.params.id},function(err,tarefa){

		if(err){
			res.send(err);
			return;
		}

		for(var prop in req.body){
			tarefa[prop]=req.body[prop];
		}

		// save the servico
		tarefa.save(function(err) {
			if (err){
				res.send(err);
				return;
			}

			res.json({ success: true, message: 'Tarefa atualizada.', tarefa: tarefa });
		});

	});
}

function deleteTarefa(req,res){
	Tarefa.remove({_id: req.params.id}, function(err, tarefa) {
		if (err){
			res.send(err);
			return;
		}

		res.json({ message: 'Tarefa excluída com sucesso.' });
	});
}


module.exports = {
	getTarefas: getTarefas,
	getTarefasDoProjeto: getTarefasDoProjeto,
	postTarefa: postTarefa,
	getTarefa: getTarefa,
	putTarefa: putTarefa,
	deleteTarefa: deleteTarefa
}
