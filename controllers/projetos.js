var Projeto = require('../models/projeto');

function getProjetos(req,res){
  	Projeto.find(function(err,resProj){
		if(err){
			res.send({err : err});
		} else {
			res.json(resProj);
		}
  	});
}

function postProjeto(req, res) {

	var proj = new Projeto(req.body);

	proj.save(function(err){
		if(err){
			res.send({err: err, message: 'Ocorreu um erro ao tentar salvar o projeto.'});
			// console.log(err);
		} else {
			res.send({success: true, message:'Projeto adicionado.', idProjeto: proj._id, projeto: proj});
		}
	});
}

function getProjeto(req,res){
	Projeto.findOne({_id:req.params.id}, function(err,resProj){
		if(err){
			res.send(err);
		} else {
			res.json(resProj);
		}
	});
}

function putProjeto(req,res){
	Projeto.findOne({_id:req.params.id},function(err,proj){

		if(err){
			res.send(err);
			return;
		}

		for(var prop in req.body){
			proj[prop]=req.body[prop];
		}

		// save the servico
		proj.save(function(err) {
			if (err){
				res.send(err);
				return;
			}

			res.json({ success: true, message: 'Projeto atualizado.', projeto: proj });
		});

	});
}

function deleteProjeto(req,res){
	Projeto.remove({_id: req.params.id}, function(err, proj) {
		if (err){
			res.send(err);
			return;
		}

		res.json({ message: 'Projeto deletado com sucesso.' });
	});
}


module.exports = {
	getProjetos: getProjetos,
	postProjeto: postProjeto,
	getProjeto: getProjeto,
	putProjeto: putProjeto,
	deleteProjeto: deleteProjeto
}
