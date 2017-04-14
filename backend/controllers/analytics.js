const db = require(__dirname + '/../lib/mysql');

exports.getCarbonFootprints = function(req, res, next){
  const username = req.session.username;

  db.query("SELECT * from USER_CARBON WHERE username = ? ORDER BY carbon_date DESC", [username], function(err, rows){
    if(err){
			return next(err);
		}

    res.send(rows);
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

exports.getStatistics = function(req, res, next){
  db.query("SELECT * FROM GEN_STATS", function(err, rows){
    if(err){
			return res.status(400).send("ERROR: Cannot retrieve data");
		}
    if(!rows.length){
			return res.status(400).send("ERROR: Data does not exist!");
		}

    res.send(rows);
  });
}

exports.getUsers = function(req, res, next){
  db.query("SELECT * FROM USERS", function(err, rows){
    if(err){
			return res.status(400).send("ERROR: Cannot retrieve data");
		}
    if(!rows.length){
			return res.status(400).send("ERROR: Data does not exist!");
		}

    res.send(rows);
  });
}
