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
    });
  }


  // updateuser: function(table, username, firstname, lastname,)
};

module.exports = orm;