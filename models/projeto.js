var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projetoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'usuario',
		required: true
	},
});

module.exports = mongoose.model('projeto', projetoSchema);