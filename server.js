// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("./config/connection.js");
var methodOverride = require('method-override');

// Create an instance of the express app.
var app = express();
var mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// app.use(express.static(process.cwd() + "/public"));
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var bodyParser = require("body-parser");
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

	var routes = require("./controllers/fmlController.js");

	app.use(routes);
     
      app.listen(PORT, function() {
	  // Log (server-side) when our server has started
	  console.log("Server listening on: http://localhost:" + PORT);
	});