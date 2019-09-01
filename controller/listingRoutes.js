const router = require('express').Router();
const listing = require('../models/storage');

router.get("/", function (req, res) {
  listing.allListings(function(data) {
    var listings = data;
    console.log(listings);
    res.render('listings', {user:req.user, listings});
  })
});

router.get("/:zip", function (req, res) {
  var zip = req.params.zip;
  listing.listingsByZip(zip, function(data) {
    var listings = data;
    console.log(listings);
    res.render('listings', {user:req.user, listings});
  })
});

router.get("/:id", function (req, res) {
  var id = req.params.id;
  listing.indivListing(id, function(data) {
    var listings = data;
    console.log(listings);
    res.render('each-listing', {user: req.user, listings});
  })
});

<<<<<<< HEAD
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
=======
>>>>>>> master

module.exports = router;