var connection = require('./connection');

var orm = {
  allListings: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  listingsByZip: function (tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ??";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateUser: function(tableInput, objColVals, condition, cb){
    var queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, res){
      if(err) throw err;
      cb(res);
    });
  },
  // userListings: function(tableInput, col, val, cb){
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ??";
  //   connection.query(queryString, [tableInput, col, val], function(err, res){
  //     if(err) throw err;
  //     cb(res);
  //   })
  // }
};

module.exports = orm;