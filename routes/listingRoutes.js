const router = require('express').Router();
const listing = require('../models/storage');

  router.get("/", function (req, res) {
    listing.allListings(function(data){
      var listings = {
        listings: data
      }
      listings = JSON.stringify(listings);
      console.log(listings);
      res.render('listings', {user:req.user, listings})
    })
    
  });

  module.exports = router;