
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});

con.connect(function(err) {
if (err) throw err;
var sql = "DELETE FROM customers WHERE address = 'Rua 24'";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Number of records deleted:" + result.affectedRows);
});
});
