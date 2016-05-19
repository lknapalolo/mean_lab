var mongooseConnection = require("mongoose");

mongooseConnection.connect("127.0.0.1:27017/shh_magical_secret_db");

var Unicorn = new mongooseConnection.Schema({
  name: String, 
  magical_power: String,
  colors: [Colors],
  wings_type: String,
  alicorn: [Vegetable],
  nemesis: String
});

var Vegetable = new mongooseConnection.Schema({
  name: String,
  flavor: String
});

var Colors = new mongooseConnection.Schema({
  color: String,
  percentage: String
});

mongooseConnection.model("Unicorn", Unicorn);
mongooseConnection.model("Vegetable", Vegetable);
mongooseConnection.model("Colors", Colors);

module.exports = mongooseConnection;
