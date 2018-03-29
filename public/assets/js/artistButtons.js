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
       