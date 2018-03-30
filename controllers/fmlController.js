var express = require("express");
var router = express.Router();
var fantasyML = require("../models/fml.js");
var path = require("path");

router.get("/", function (req, res){
	res.redirect("/home");
});

router.get("/artist", function(req, res) {
	fantasyML.all(function(data){
		var TheAllCall = {
      		fml: data
   		 };
		res.render("index", TheAllCall);
	})
});

router.get("/profile/user", function(req, res) {
	fantasyML.Signed(function(data){
		var TheAllCall = {
      		fml: data
   		 };
		res.render("profile", TheAllCall);
	})
});

router.get("/home", function(req, res) {
  fantasyML.all(function(data){
    var TheAllCall = {
          fml: data
       };
    res.render("home", TheAllCall);
  })
});

router.put("/artist/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  fantasyML.update({
    taken: req.body.taken
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/profile/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  fantasyML.update({
    labelName: req.body.labelName
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("/rules", function(req, res){
	
		res.render("rules");

});


// Export routes for server.js to use.
module.exports = router;