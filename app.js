//=========================================
// Carrega os módulos
//=========================================

var express     = require('express'),
	bodyParser  = require('body-parser'),
	mongoose    = require('mongoose'),
	cors        = require('cors'),
	morgan      = require('morgan'),
	passport    = require('passport');

//=========================================
// Carrega as rotas
//=========================================

var projetos    = require('./routes/projetos.js'),
	tarefas		= require('./routes/tarefas.js'),
	usuarios	= require('./routes/usuarios.js'),
	auth        = require('./routes/auth.js'),
	external    = require('./routes/external.js');

//=========================================
// Conexão com o banco de dados
//=========================================

// get db config file
var config = require('./config/database');
// Conecta ao banco de dados
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
// Passport: usado para autenticação
//=========================================

// Use the passport package in our application
app.use(passport.initialize());

// pass passport for configuration
var configpass = require('./config/passport');
configpass(passport);

//=========================================
// Conectar rotas
//=========================================

// connect the api routes under api
app.use('/api/auth', auth);
app.use('/api/projetos', projetos);
app.use('/api/tarefas', tarefas);
app.use('/api/usuarios', usuarios);
app.use('/api/external', external);


module.exports = app;
