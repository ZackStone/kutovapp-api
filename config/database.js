var dbuser = process.env.KUTOVAPP_API_DBUSER;
var dbpass = process.env.KUTOVAPP_API_DBPASS;

// https://mlab.com
var database = 'mongodb://' + dbuser + ':' + dbpass + '@ds025762.mlab.com:25762/kutovappdb';

// local
//database = 'mongodb://localhost:27017/kutovappdb';


module.exports = {
	'database': database
};