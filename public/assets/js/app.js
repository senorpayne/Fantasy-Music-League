			console.log("CONNECTED!!!");


			$(".modal-btn").on("click", function(event) {
			    var id = $(this).data("id");
			    var signed = $(this).data("signed");

			    var contractState = {
			      taken: 1
			    };
			    $.ajax("/artist" + id, {
			      type: "PUT",
			      data: contractState
			    }).then(
			      function() {
			        console.log("changed artist contract to", signed);
			        // Reload the page to get the updated list
			        location.reload();
			      }
			    );
			  });








			// var mysql = require("mysql");
			// var connection = require("../config/connection.js");

			// function addTo(artist){
   //      	console.log("clicked")
        	
   //      	var query = connection.query(
		 //    "UPDATE user_artist SET ? WHERE ?",
		 //    [
		 //      {
		 //        handle: this.handle
		 //      },
		 //      {
		 //        genre: this.genre
		 //      },
		 //      {
		 //        contractCost: this.contractCost
		 //      },
		 //      {
		 //        image: this.image
		 //      },
		 //      {
		 //        chartPosition: this.chartPosition
		 //      },
		 //      {
		 //        bio: this.bio
		 //      }
		 //    ],
		 //    function(err, res) {
		 //      console.log(res.affectedRows + " products updated!\n");
		 //      // Call deleteProduct AFTER the UPDATE completes
		 //    }
		 //  );




   //      }