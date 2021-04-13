var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'',
	user:'dddsdf',
	password:'ddddddsdfasdfdddddsadfdddddddd',
	database:'dddddsdasdfasdfdd'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
