const db = require(__dirname + '/../lib/mysql');

exports.getCarbonFootprints = function(req, res, next){
  const username = req.session.username;
  /*
  db.query("SELECT * FROM CLASS_STUDENT, STUDENT WHERE " +
      "CLASS_STUDENT.class_id = ? and CLASS_STUDENT.student_number = " +
      "STUDENT.student_number and CLASS_STUDENT.emp_num = STUDENT.emp_num and "+
      "STUDENT.emp_num = ? ORDER BY CLASS_STUDENT.no_of_times_called " +
      "DESC LIMIT 10",
      [req.params.class_id, req.session.emp_num],
      function (err, rows) {
          if (err) {
              logs(req, "ERROR", "Error: MySQL Query FAILED.");
              return next(err);
          }
          logs(req, "SUCCESS", "RETRIEVED top 10 students from "+req.params.class_id);
          res.send(rows);
  });
  */

  db.query("SELECT * from USER_CARBON WHERE username = ? ORDER BY carbon_date", [username], function(err, rows){
    if(err){
			return next(err);
		}

    res.send(rows);
  });
}
