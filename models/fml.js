var orm = require("../config/orm.js");

var fantasyML = {
  all: function(cb) {
    orm.all("fml_artist", function(res) {
      cb(res);
    });
  },
  allProfile: function(cb) {
    orm.all("user_artist", function(res) {
      cb(res);
    });
  },
  Signed: function(cb) {
    orm.allSigned("fml_artist", function(res){
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("fml_artist", objColVals, condition, function(res) {
      cb(res);
    });
  },
  updateThemAll: function(objColVals, cb) {
    orm.updateAll("fml_artist", objColVals, function(res) {
      cb(res);
    });
  }

// ********* REMEMBER TO ADD COMA ^^^ ONCE YOU UN-COMMENT THE LINES BELOW *************


  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("cats", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("cats", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete("cats", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = fantasyML;