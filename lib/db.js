var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'aiamysql001.mysql.database.azure.com',
	user:'sb103601@aiamysql001',
	password:'Rlatkdqja25!',
	database:'RestAPI'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
