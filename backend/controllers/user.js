const db = require(__dirname + '/../lib/mysql');

exports.computeCarbon = function (req, res, next){
  const username = req.session.username;
  const food_score = req.body.food_score;
  const travel_score = req.body.travel_score;
  const home_score = req.body.home_score;
  const footprint = req.body.footprint;

  db.query("INSERT INTO USER_CARBON(username, food_score, travel_score, home_score, carbon_level, carbon_date) VALUES(?, ?, ?, ?, ?, NOW())", [username, food_score, travel_score, home_score, footprint], function(err, rows){
    if(err){
      return next(err);
    }else{
      return res.send(rows);
    }
  });
}

exports.answerSurvey = function (req, res, next){
  const username = req.session.username;
  const age = req.body.age;
  const sex = req.body.sex;
  const education = req.body.education;
  const salary = req.body.salary;
  const score = req.body.score;
  const perception = req.body.perception;

  if(!username){
    return res.status(400).send("ERROR: No username found!");
  }
  if(!age){
    return res.status(400).send("ERROR: No age found!");
  }
  if(!sex){
    return res.status(400).send("ERROR: No sex found!");
  }
  if(!education){
    return res.status(400).send("ERROR: No education found!");
  }
  if(!salary){
    return res.status(400).send("ERROR: No salary found!");
  }
  if(!score){
    return res.status(400).send("ERROR: No score found!");
  }
  if(!perception){
    return res.status(400).send("ERROR: No perception found!");
  }

  db.query("SELECT username FROM USERS WHERE username = ?", [username], function(err, rows){
    if(!rows.length){
      return res.status(400).send("ERROR: Username does not exist!");
    }else{
      db.query("SELECT username from GEN_STATS WHERE username = ?", [username], function(err, rows){
        if(rows.length){
          return res.status(400).send("ERROR: You have already answered the survey!");
        }else{
          db.query("INSERT INTO GEN_STATS(username, age, sex, education, salary, score, perception) VALUES(?, ?, ?, ?, ?, ?, ?)", [username, age, sex, education, salary, score, perception], function(err, rows){
            if(err){
              return res.status(400).send(err);
            }else{
              console.log("survey answered successfully!");
              return res.send(rows);
            }
          });
        }
      });
    }
  });


}

/*
db.query("SELECT username from GEN_STATS WHERE username = ?", [username], function(err, rows){
  if(rows.length){
    return res.status(400).send("ERROR: You have already answered the survey!");
  }else{
    db.query("INSER INTO GEN_STATS(username, age, sex, education, salary, score, perception) VALUES(?, ?, ?, ?, ?, ?, ?)", [username, age, sex, education, salary, score, perception], function(err, rows){
      if(err){
        return res.status(400).send(err);
      }else{
        console.log("survey answered successfully!");
        return res.send(rows);
      }
    });
  }
});
*/
