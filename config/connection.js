const mysql = require('mysql');


var connection = mysql.createConnection({
    host: "tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bnuw98s5kgwwgpia",
    password: "rckxu9ni8tuwwy2q",
    database: "z8wo8njt9w3q2s0m"
});


connection.connect(function(err){
    if(err) throw err;
    console.log("DB connection successful");
});

module.exports = connection;
