var orm = require('../config/orm');

var listing = {

  allListings: function (cb) {
    orm.allListings("products", function (res) {
      cb(res);
    });
  },
  userListings: function (id, cb) {
    orm.selectWhere("products", "customer_id", id, function (res) {
      cb(res);
    });
  },
  all: function (id, cb) {
    orm.all("products", id, function (res) {
      console.log(id);
      cb(res);
    });
  },
  one: function(cb){
    orm.one("products", function(res) {
     cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("products", cols, vals, function(res) {
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
  },
  


};

module.exports = listing;