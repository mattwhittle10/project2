const router = require('express').Router();
const listing = require('../models/storage');

  router.get("/", function (req, res) {
    listing.allListings(function(data){
      var listings = data;
      console.log(listings);
      res.render('listings', {user:req.user, listings});
    })
  });


    router.get("/:id", function (req, res) {
      var id = req.params.id;
      listing.indivListing(id,function(data){
        var listing = data;
        console.log(listing);
        res.render('each-listing', {user:req.user, listing});
      })
    });

    router.get("/:zipVal", function (req, res) {
      var zipVal = req.params.zipVal;
      console.log(zipVal);
      listing.listingsByZip(zipVal, function(data){
        var listing = data;
        res.render('listings', listing);
      })
    });
    

  module.exports = router;