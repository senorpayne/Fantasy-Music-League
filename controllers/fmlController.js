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
       
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/profile/:id", function(req, res) {
  var condition = "id = " + 1;

  console.log("condition", condition);

  fantasyML.update({
    labelName: req.body.labelName
  }, condition, function(result) {
    if (result.changedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("/rules", function(req, res){
	
		res.render("rules");

});

// router.post('/api/artistPlayCount', function(req, res) {

//   var names = Object.keys(req.body);

//   for(var x = 0; x < names.length; x++){
    
//     fantasyML.insert("handle", names[x], function(result) {
    
//     });
//   }
  
// })

// router.put("/api/artistPlayCount", function(req, res) {
  
//   var names = Object.keys(req.body);
  
//   for(var j = 0; j < names.length; j++){
//     var condition = "artist_id = " + (j+1) + "";
//       console.log(names[j]);
//     var plays = parseInt(req.body[names[j]]);
    
//     fantasyML.updateOne({
//         playCount: plays
//       }, condition, function(result) {
        
//     });
//   }
  
// });

module.exports = router;