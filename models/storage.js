var orm = require('../config/orm');

var listing ={
    allListings: function(cb){
        orm.allListings("products", function(res){
            cb(res);
        });
    },
    listingsByZip: function(cb){
        orm.listingsByZip("products","zipcode",zipcodeInput, function(res){
            cb(res);
        })
    }
};

module.exports = listing;