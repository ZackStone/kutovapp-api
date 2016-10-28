var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var usuarioSchema = new Schema({
	nome: String,
	email: {
		type: String,
		unique: true,
		required: true
	},
	senha: {
		type: String,
		required: true
	}
	
});

usuarioSchema.pre('save', function (next) {
	var user = this;
	if (this.isModified('senha') || this.isNew) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				return next(err);
			}
			bcrypt.hash(user.senha, salt, function (err, hash) {
				if (err) {
					return next(err);
				}
				user.senha = hash;
				next();
			});
		});
	} else {
		return next();
	}
});
 
usuarioSchema.methods.verificarSenha = function (passw, cb) {
	bcrypt.compare(passw, this.senha, function (err, isMatch) {
		if (err) {
			return cb(err);
		}
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('usuario', usuarioSchema);