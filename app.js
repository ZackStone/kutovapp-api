//=========================================
// Carrega os módulos
//=========================================

var express     = require('express'),
	bodyParser  = require('body-parser'),
	mongoose    = require('mongoose'),
	cors        = require('cors'),
	morgan      = require('morgan');

//=========================================
// Carrega as rotas
//=========================================

var projetos    = require('./routes/projetos.js'),
	tarefas		= require('./routes/tarefas.js');

//=========================================
// Conexão com o banco de dados
//=========================================

// get db config file
var config = require('./config/database');
// Conecta ao banco de dados
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//=========================================
// Configura o servidor express
//=========================================

var app = express();

// get our request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// log to console
app.use(morgan('dev'));

//=========================================
// Conectar rotas
//=========================================

// connect the api routes under api
app.use('/api/projetos', projetos);
app.use('/api/tarefas', tarefas);


module.exports = app;