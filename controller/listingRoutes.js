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

    // //add ID
    // router.create("/create/", function (req, res) {
    //     res.render('SWARADA PAGE', {user:req.user});
    // });

    // listing.listingsByZip(function(data){
    //   var hbsObject = {
    //     listings: data
    //   }
    //   console.log(hbsObject);
    //   res.render("listings", hbsObject);
    // })

    

  module.exports = router;