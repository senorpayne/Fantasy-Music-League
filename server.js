// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("./config/connection.js");
// Create an instance of the express app.
var app = express();
var mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var bodyParser = require("body-parser");
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data

// app.get("/artist", function(req, res) {
// 	connection.query("SELECT * from fml_artist", function(err, data){
// 		res.render("index", {fml: data} );
// 	})
// });


// app.get("/profile/label", function(req, res){
// 	connection.query("SELECT * from user_artist", function(err, data){
// 		res.render("teamSelect", {fml: data} );
// 	})
// });

// // create rules table in our database
// app.get("/rules", function(req, res){
// 	connection.query("SELECT * from rules", function(err, data){
// 		res.render("index", {taco: data} );
// 	})
// });


// app.get("/league", function(req, res){
// 	connection.query("SELECT * from fml_artist ORDER by earnings DESC", function(err, data){
// 		res.render("index", {taco: data} );
// 	})
// });


// ******************************
// POSTING TO MYSQL


// POSTING TO MYSQL
// ******************************

	var routes = require("./controllers/fmlController.js");

	app.use(routes);
     
      app.listen(PORT, function() {
	  // Log (server-side) when our server has started
	  console.log("Server listening on: http://localhost:" + PORT);
	});