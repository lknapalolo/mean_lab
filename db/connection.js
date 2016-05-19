var mongooseConnection = require("mongoose");

mongooseConnection.connect("127.0.0.1:27017/shh_magical_secret_db");

var Unicorn = new mongooseConnection.Schema({
  magical_power: String,
  colors: [],
  wings_type: String,
  alicorn: [Vegetable]
});

var Vegetable = new mongooseConnection.Schema({
  name: String,
  flavor: String
});

var Colors = new mongooseConnection.Schema({
  color: String,
  percentage: String
});
