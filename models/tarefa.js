var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tarefaSchema = new Schema({
	projeto: {
		type: Schema.Types.ObjectId,
		ref: 'projeto',
		required: true
	},
	descricao: String,
	dataLimite: Date,
	prioridade: Number,
	flgConcluida : Boolean
});

module.exports = mongoose.model('tarefa', tarefaSchema);