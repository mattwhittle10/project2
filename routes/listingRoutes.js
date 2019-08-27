const router = require('express').Router();
const listing = require('../models/storage');

  router.get("/", function (req, res) {
    listing.allListings(function(data){
      var listings = data;

      console.log("YOU MADE IT To ThE LISTING");
      res.render('listings', {user:req.user, listings})
    });

      console.log(listings);
      res.render('listings', {user:req.user, listings});
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