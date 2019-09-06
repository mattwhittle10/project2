const router = require('express').Router();
const listing = require('../models/storage');

router.get("/", function (req, res) {
  listing.allListings(function(data) {
    var listings = data;
    res.render('listings', {user:req.user, listings});
  })
});

router.get("/:zip", function (req, res) {
  var zip = req.params.zip;
  listing.listingsByZip(zip, function(data) {
    var listings = data;
    var test = {user:req.user, zip, listings};
    res.render('listings', {user:req.user, zip, listings});
  })
});

router.get("/:id", function (req, res) {
  var id = req.params.id;
  listing.indivListing(id, function(data) {
    var listings = data;
    console.log(req.user);
    res.render('each-listing', {user: req.user, listings});
  })
});

module.exports = router;