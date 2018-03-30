			// Modal button JS CODE
			function toggleinfo(id){
			 
            $(id).toggle();
        	}

        	$(".modal-btn").on("click", function(event) {
			    var id = $(this).data("id");
			    var signed = $(this).data("signed");

			    var contractState = {
			      taken: 1
			    };
			    $.ajax("/artist/" + id, {
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

        	$(".remover").on("click", function(event) {
			    var id = $(this).data("id");
			    var signed = $(this).data("signed");

			    var contractState = {
			      taken: 0
			    };
			    $.ajax("/artist/" + id, {
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
       			
       			$(".btn").on("click", function(event) {
			    var id = 1;
			    var recordLabel = $(this).data("labelNamed");

			    var label = $('#record-label-name').val();
			    var labelRecordNAme = {
			      labelName: label
			    };
			    $.ajax("/profile/" + id, {
			      type: "PUT",
			      data: labelRecordNAme
			    }).then(
			      function() {
			        console.log("changed artist contract to", recordLabel);
			        // Reload the page to get the updated list
			        // location.reload();
			        res.redirect("localhost:3000/artist");
			      }
			    );
			  });