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
	/*
	db.query("SELECT username, password, is_admin FROM USERS WHERE username = ? AND password = ?", [username, password], function(err, rows){
		if(err){
			return next(err);
		}
	*/
	db.query("SELECT username, password, is_admin FROM USERS WHERE username = ?", [username], function(err, rows){
		if(err){
			return next(err);
		}

		if(rows.length){
			console.log("user found!");
			if(password != rows[0].password){
				return res.status(400).send("ERROR: Username and password do not match");
			}
			if(rows[0].is_admin == 0){
				req.session.role = 'USER';
			}else{
				req.session.role = 'ADMIN';
			}
			req.session.username = rows[0].username;
			return res.send(rows);
		}else{
			return res.status(400).send("ERROR: Username does not exist");
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

exports.signup = function (req, res, next){

	const username = req.body.username;
	const password = req.body.password;
	const confirmpassword = req.body.confirmpassword;

	if(!username){
        return res.status(400).send("ERROR: Username is blank");
    }

    if(!password){
        return res.status(400).send("ERROR: Password is blank");
    }

    if(!confirmpassword){
        return res.status(400).send("ERROR: Confirm Password is blank");
    }

    if(password != confirmpassword){
    	return res.status(400).send("ERROR: Passwords do not match!");
    }else{
    	db.query("INSERT INTO USERS(username, password) values(?, ?)", [username, password], function(err, rows){
    		if(err){
				return next(err);
			}else{
				console.log("signup successful!");
				return res.send(rows);
			}
    	});
    }
}

exports.getName = function(req, res, next){
	const username = req.session.username;
	return res.send(username);
}
