const router = require('express').Router();
const listing = require('../models/storage');

  router.get("/", function (req, res) {
    listing.allListings(function(data){
      var listing = {
        listings: data
      }
      console.log(listing);
      res.render("listings", listing);
    })

    // listing.listingsByZip(function(data){
    //   var hbsObject = {
    //     listings: data
    //   }
    //   console.log(hbsObject);
    //   res.render("listings", hbsObject);
    // })
    
  });

  module.exports = router;
