var express = require("express");

var router = express.Router();
var connection = require("../config/connection.js");

router.get("/artist", function(req, res) {
	connection.query("SELECT * from fml_artist", function(err, data){
		res.render("index", {fml: data} );
	})
});

router.get("/profile/label", function(req, res){
	connection.query("SELECT * from user_artist", function(err, data){
		res.render("teamSelect", {fml: data} );
	})
});

// create rules table in our database
router.get("/rules", function(req, res){
	connection.query("SELECT * from rules", function(err, data){
		res.render("index", {taco: data} );
	})
});

router.get("/league", function(req, res){
	connection.query("SELECT * from fml_artist ORDER by earnings DESC", function(err, data){
		res.render("index", {taco: data} );
	})
});








// Export routes for server.js to use.
module.exports = router;