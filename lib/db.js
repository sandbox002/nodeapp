var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'',
	user:'ddd',
	password:'ddddd',
	database:'ddddddddddd'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
