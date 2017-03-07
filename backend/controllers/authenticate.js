const db = require(__dirname + '/../lib/mysql');

exports.login = function (req, res, next){
	/*
		Get username and password from text field from index.html

		NOTE: Use ajax from jquery in frontend to pass data here
	*/
	const username = req.body.username;
	const password = req.body.password;

	if(req.session.username){
    	return res.status(400).send("LOGIN FAILED: Someone is already logged in.");
    }

    if(!username){
        return res.status(400).send("ERROR: Username is blank");
    }

    if(!password){
        return res.status(400).send("ERROR: Password is blank");
    }

	db.query("SELECT username, password FROM USERS WHERE username = ? AND password = ?", [username, password], function(err, rows){
		if(err){
			return next(err);
		}

		if(rows.length == 1){
			console.log("user found!");
			req.session.username = rows[0].username;
			return res.send(rows);
		}else{
			return console.log("user not found!");
		}
	});
}

exports.logout = function (req, res, next){
	if(!req.session.username){
        return res.status(400).send("LOGOUT FAILED: Nobody is logged in.");
    }
	req.session.destroy();

    return res.send("Successfully logged out!");
}