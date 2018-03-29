var express = require("express");
var router = express.Router();
var fantasyML = require("../models/fml.js");

router.get("/", function (req, res){
	res.redirect("/artist");
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
		res.render("teamSelect", TheAllCall);
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

// router.get("/profile/label", function(req, res){
// 	connection.query("SELECT * from user_artist", function(err, data){
// 		res.render("teamSelect", {fml: data} );
// 	})
// });

// create rules table in our database
// router.get("/rules", function(req, res){
// 	connection.query("SELECT * from rules", function(err, data){
// 		res.render("index", {taco: data} );
// 	})
// });

// router.get("/league", function(req, res){
// 	connection.query("SELECT * from fml_artist ORDER by earnings DESC", function(err, data){
// 		res.render("index", {taco: data} );
// 	})
// });

// Export routes for server.js to use.
module.exports = router;