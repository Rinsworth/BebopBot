var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: config.username,
  password: config.password,
  database: "gatcha"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE gambling SET money = 0";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
