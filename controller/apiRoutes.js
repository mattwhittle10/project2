var listing = require("../models/storage");
var customer = require('../models/customer');
const router = require('express').Router();

// Create all our routes and set up logic within those routes where required.
router.get("/:id", function(req, res) {
  var id =req.params.id;
  console.log("id is :" + id);
  listing.all(id,function(data) {
      var storages = data
    console.log(storages);
    res.render("update", {user:req.user, storages});
  });
});

router.put("/storage/:id", function(req, res) {
  var condition =req.params.id;
  console.log(condition,req.body.price);
  listing.update({
    price: req.body.price
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/storage/:id", function(req, res) {
  var condition =req.params.id;
  listing.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

  //Update a user
  router.put('/customers/:id', function(req, res){
    var userObj = req.body;
    var condition = "customer_id =" + req.params.id;
    customer.updateUser(userObj, condition, function(){
      res.status(204).end();
    });
    // console.log(userObj, condition);

});

  
  module.exports = router;
