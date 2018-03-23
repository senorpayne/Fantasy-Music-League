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

app.get("/artist", function(req, res) {
	connection.query("SELECT * from fml_artist", function(err, data){
		res.render("index", {fml: data} );
	})
});

app.get("/champions", function(req, res){
	connection.query("SELECT * from angelRoster WHERE titles >= '1' ORDER by titles DESC", function(err, data){
		res.render("champions", {queens: data} );
	})
});

app.get("/wins", function(req, res){
	connection.query("SELECT * from angelRoster ORDER by wins DESC", function(err, data){
		res.render("index", {taco: data} );
	})
});

app.get("/paid", function(req, res){
	connection.query("SELECT * from angelRoster ORDER by earnings DESC", function(err, data){
		res.render("index", {taco: data} );
	})
});

app.get("/medals", function(req, res){
	connection.query("SELECT * from angelRoster WHERE gold or silver or bronze >= '1' ORDER by gold DESC", function(err, data){
		res.render("champions", {queens: data} );
	})
});

      // app.get("/home", function(req, res){
      // 	connection.query("SELECT * from roster", function(err, data){
      // 		res.render("home", {light: data} );
      // 	})
      // });

      app.get("/home", function(req, res){
      	res.render("home", {tabs: res})
      });

 //      app.put("/home", function(req, res) {
 //      	connection.query(
 //      		"UPDATE angelRoster SET earnings = ?, wins = ?, loss = ?, gold = ?, silver = ?, bronze = ? WHERE handle = ?",
 //      		[req.body.earnings, req.body.wins, req.body.loss, req.body.gold, req.body.silver, req.body.bronze],
 //      		function(err, result) {
 //      			if (err) {
	//         // If an error occurred, send a generic server faliure
	//         return res.status(500).end();
	//     }
	//     else if (result.changedRows === 0) {
	//         // If no rows were changed, then the ID must not exist, so 404
	//         return res.status(404).end();
	//     }
	//     res.status(200).end();

	// }
	// );
 //      });

      app.listen(PORT, function() {
	  // Log (server-side) when our server has started
	  console.log("Server listening on: http://localhost:" + PORT);
	});