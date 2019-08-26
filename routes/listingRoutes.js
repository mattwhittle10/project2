const router = require('express').Router();
const listing = require('../models/storage');

  router.get("/", function (req, res) {
    listing.allListings(function(data){
      var listings = data;
      console.log("YOU MADE IT To ThE LISTING");
      res.render('listings', {user:req.user, listings})
    });
    
  });

  module.exports = router;