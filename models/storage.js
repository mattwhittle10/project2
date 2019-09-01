var orm = require('../config/orm');

var listing = {

  allListings: function (cb) {
    orm.allListings("products", function (res) {
      cb(res);
    });
  },
  userListings: function (id, cb) {
    orm.userListings("products", "customer_id", id, function (res) {
      cb(res);
    });
  },
  all: function (id, cb) {
    orm.all("products", id, function (res) {
      console.log(id);
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("products", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("products", condition, function (res) {
      cb(res);
    });
  },
  listingsByZip: function (condition, cb) {
    orm.selectWhere("products", "zip", condition, function (res) {
      cb(res);
    });
  },
  indivListing: function (condition, cb) {
    orm.selectWhere("products", "product_id", condition, function (res) {
      cb(res);
    });
  }

<<<<<<< HEAD
    },
    all: function(id,cb) {
        orm.all("products",id, function(res) {
          console.log(id);
          cb(res);
        });
      },
      
      update: function(objColVals, condition, cb) {
        orm.update("products", objColVals, condition, function(res) {
          cb(res);
        });
      },
    
      delete: function(condition, cb) {
        orm.delete("products", condition, function(res) {
          cb(res);
        });
      },

      indivListing: function(condition, cb){
        orm.selectWhere("products", "product_id", condition, function(res){
          cb(res);
        });
      },

      // //create listing (NATE MADE THIS --- I THINK SWARADA MADE THIS)
      // createListing: function(condition, cb){
      //   orm.createListing("", "", condition, function(res){
      //     cb(res);
      //   });
      // }
=======
>>>>>>> master
};

module.exports = listing;