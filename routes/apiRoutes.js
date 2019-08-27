var listing = require("../models/storage");
var customer = require('../models/customer');
const router = require('express').Router();

  // Get all examples
  router.get("/listings", function(req, res) {

  });

  // Create a new listing
  router.post("/listings", function(req, res) {

  });  

  // Delete a listing
  router.delete("/listings/:id", function(req, res) {

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
