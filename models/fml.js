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
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateWhere(objColVals, condition, function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.insert("fml_artist", cols, vals, function(res) {
      cb(res);
    });
  }

// ********* REMEMBER TO ADD COMA ^^^ ONCE YOU UN-COMMENT THE LINES BELOW *************

};

module.exports = fantasyML;