const mysql = require('mysql');

const obj = {
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'LIVESMART'
};

module.exports = mysql.createConnection(obj);