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

module.exports = router;