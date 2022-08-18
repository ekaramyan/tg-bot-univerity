const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});
 
const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
  )`;

connection.query("CREATE DATABASE student",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});


connection.end();