var mongooseConnection = require("mongoose");

mongooseConnection.connect("127.0.0.1:27017/shh_magical_secret_db");


var Vegetable = new mongooseConnection.Schema({
  name: String,
  flavor: String
});

var Colors = new mongooseConnection.Schema({
  color: String,
  percentage: String
});

var Unicorn = new mongooseConnection.Schema({
  name: String,
  magical_power: String,
  colors: [Colors],
  wings_type: String,
  alicorn: [Vegetable],
  nemesis: String
});

mongooseConnection.model("Vegetable", Vegetable);
mongooseConnection.model("Colors", Colors);
mongooseConnection.model("Unicorn", Unicorn);

module.exports = mongooseConnection;
