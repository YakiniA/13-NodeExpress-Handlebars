var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgerData: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req);
  burger.create(["burger_name" , "devoured"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    console.log("Result" +result);
    res.json({ id: result.insertId });
  });
});


// Export routes for server.js to use.
module.exports = router;
