const db = require(__dirname + '/../lib/mysql');

exports.test = function(req, res, next){
	const username = req.session.username;

	console.log(username);
}