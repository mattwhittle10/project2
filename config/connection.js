const mysql = require('mysql');
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: process.env.MYSQL_PORT,
        user: "root",
        password: "",
        database: "storage_db"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("DB connection successful");
});

module.exports = connection;
