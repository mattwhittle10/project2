var connection = require('./connection');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string") {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  allListings: function (tableInput,  cb) {
    var queryString = "SELECT * FROM " + tableInput + " LIMIT 3;";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateUser: function (tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  all: function (table, id, cb) {
    var queryString = "SELECT * FROM " + table;
    queryString += " WHERE product_id= ";
    queryString += id;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  one: function (table,  cb) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(vals.title);
      cb(result);
    });
  },

  update: function (table, objColVals, condition, cb) {
    console.log(objColVals, condition);
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "?";
    queryString += " WHERE product_id=";
    queryString += "?";

    console.log(queryString);
    connection.query(queryString, [objColVals, condition], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function (table, condition, cb) {

    var queryString1 ="SELECT * FROM " + table;
    queryString += "WHERE product_id= ";
    queryString += condition;

    console.log(queryString1);
    connection.query(queryString1, function (err, result1) {
      if (err) {
        throw err;
      }
      
      console.log(result1[0].product_id , result1[0].title, result1[0].img_url, result1[0].address,result1[0].city,result1[0].state,result1[0].zip, result1[0].available, result1[0].price, result1[0].category, result1[0].secure, result1[0].description,result1[0].customer_id);
      var queryString2 = "INSERT INTO products_archive (product_id,title,img_url,address,city,state,zip,available,price,category,secure,description,customer_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
      console.log(queryString2);
      connection.query(queryString2, [result1[0].product_id , result1[0].title, result1[0].img_url, result1[0].address,result1[0].city,result1[0].state,result1[0].zip, result1[0].available, result1[0].price, result1[0].category, result1[0].secure, result1[0].description,result1[0].customer_id ],function (err, result2) {
        if (err) {
          throw err;
        }
        console.log("Record archived");
      });

    });

    var queryString = "DELETE FROM " + table;
    queryString += " WHERE product_id=";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  listingsByZip: function (table, col, condition) {

    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, col, condition], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  indivListing: function (table, col, condition, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? =?";
    connection.query(queryString, [table, col, condition], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;