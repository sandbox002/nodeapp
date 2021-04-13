var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'',
	user:'ddd',
	password:'dddddddddddddddddd',
	database:'ddddddd'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
