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

router.get("/storage/post", function(req, res) {
  // listing.one(function(data) {
  //   var hbsObject = {
  //     storages: data
  //   };
  var id = parseInt(req.user.customer_id);
    res.render("post",  {user:req.user, id});
  });
// });

router.post("/storage/post", function(req, res) {
  console.log(req.body.title, req.body.img_url, req.body.address,req.body.city,req.body.state,req.body.zip, req.body.available, req.body.price, req.body.category, req.body.secure, req.body.description,req.body.customer_id);
  listing.create([
    "title", "img_url", "address","city","state","zip","available", "price", "category", "secure", "description","customer_id"
  ], [
    req.body.title, req.body.img_url, req.body.address,req.body.city,req.body.state,req.body.zip, req.body.available, req.body.price, req.body.category, req.body.secure, req.body.description,req.body.customer_id
  ], function(result) {
    // Send back the ID of the new quote
    //res.json({ id: result.insertId });
    res.redirect("/storage/post");
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
