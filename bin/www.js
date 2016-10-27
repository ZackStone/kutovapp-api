var app = require('../app');
var port = process.env.PORT || 50274;
// var port = 50274; // porta padrão para não ficar mudando de porta em cada máquina

app.set('port', port);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port  ' + port) ;
});
