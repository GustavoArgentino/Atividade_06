var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");

var sql = "INSERT INTO customers (name, address) VALUES ('gustavo','Rua 24')";
for (let i = 1; i <= 20; i++)
con.query(sql, function (err, result) {
if (err) throw err; console.log("1 record inserted");
});
});
