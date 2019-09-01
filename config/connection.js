const mysql = require('mysql');

var connection = mysql.createConnection({
    port: process.env.MYSQL_PORT,
    user: "root",
    password: "",
    database: "storage_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("DB connection successful");
});

module.exports = connection;
