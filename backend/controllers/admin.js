const db = require(__dirname + '/../lib/mysql');

exports.deleteUser = function (req, res, next){
	const username = req.body.username;

	db.query("SELECT username, is_admin FROM USERS where username = ?", [username], function(err, rows){
		if(err){
			return next(err);
		}

		if(!rows.length){
			return console.log("Username not found!");
		}else if(rows[0].is_admin == 0){
			db.query("DELETE FROM USERS WHERE username = ?", [username], function(err2, rows2){
				return res.send(rows2);
			});
		}else{
			return console.log("Cannot delete admin!");
		}
	});
}