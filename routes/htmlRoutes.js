const router = require('express').Router();

  router.get("/", function (req, res) {
    res.render("listings")
  });

  module.exports = router;
