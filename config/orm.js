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
  updateUser: function(tableInput, col1, val1, col2, val2, col3, val3, col4, val4, col5, val5, col6, val6, userId, cb){
    var queryString = "UPDATE ?? SET ??=?, ??=?, ??=?, ??=?, ??=?, ??=? WHERE id = ?;";
    values = [tableInput, col1, val1, col2, val2, col3, val3, col4, val4, col5, val5, col6, val6, userId];
    connection.query(queryString,[values], function(err, res){
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