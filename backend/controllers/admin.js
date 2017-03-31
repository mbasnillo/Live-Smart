const db = require(__dirname + '/../lib/mysql');

exports.deleteUser = function (req, res, next){
	const username = req.body.username;
	const confirmusername = req.body.confirmusername;

	if(!username){
		return res.status(400).send("ERROR: Username field is blank!");
	}

	if(!confirmusername){
		return res.status(400).send("ERROR: Confirm Username field is blank!");
	}

	if(username != confirmusername){
		return res.status(400).send("ERROR: Usernames do not match!");
	}

	db.query("SELECT username, is_admin FROM USERS where username = ?", [username], function(err, rows){
		if(err){
			return next(err);
		}

		if(!rows.length){
			return res.status(400).send("ERROR: Username does not exist!");
		}else if(rows[0].is_admin == 0){
			db.query("DELETE FROM USERS WHERE username = ?", [username], function(err2, rows2){
				return res.send("Successfully deleted user!");
			});
		}else{
			return res.status(400).send("ERROR: Cannot delete admin!");
		}
	});
}

exports.getUserGraph = function(req, res, next){
	const username = req.body.username;
	if(!username){
		return res.status(400).send("ERROR: Text field is blank!");
	}
	db.query("SELECT * from USER_CARBON WHERE username = ? ORDER BY carbon_date", [username], function(err, rows){
    if(err){
			return res.status(400).send("ERROR: Cannot retrieve data");
		}

		if(!rows.length){
			return res.status(400).send("ERROR: Username does not exist!");
		}

    res.send(rows);
  });
}
