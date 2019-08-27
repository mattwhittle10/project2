// var express = require("express");

// var router = express.Router();

// // Import the model (storage.js) to use its database functions.
// var storage = require("../models/storage.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/api/:id", function(req, res) {
//   var id =req.params.id;
//   console.log("id is :"+id);
//   storage.all(id,function(data) {
//     var hbsObject = {
//       storages: data
//     };
//     console.log(hbsObject);
//     res.render("update", hbsObject);
//   });
// });

// router.put("/api/storage/:id", function(req, res) {
//   var condition =req.params.id;
//   console.log(condition,req.body.price);
//   storage.update({
//     price: req.body.price
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/storage/:id", function(req, res) {
//   var condition =req.params.id;
//   storage.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });




// // Export routes for server.js to use.
// module.exports = router;
