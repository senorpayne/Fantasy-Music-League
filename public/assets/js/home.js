
    $(".theSubmit").on("click", function(event) {
      event.preventDefault();

      var newUserLogin = {
        User_Name: $("#reserve-name").val().trim(),
        Label_Name: $("#record-label-name").val().trim()
      };

      console.log(newUserLogin);

      $.post("/profile/user", newUserLogin,
        function(data) {

          var cobalt = data;
          $('#user-label-name').html(cobalt);

        });

    });
