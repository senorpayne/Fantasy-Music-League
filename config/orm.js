var connection = require("./connection.js");


var orm = {
  selectWhere: function(name, money, country) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [name, money, country], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
   }
  };