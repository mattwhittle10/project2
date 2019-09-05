const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    user: "root",
    password: "root",
    database: "storage_db"
});
}

connection.connect(function(err){
    if(err) throw err;
    console.log("DB connection successful");
});

module.exports = connection;
