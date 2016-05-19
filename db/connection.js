var mongooseConnection = require("mongoose");

mongooseConnection.connect("127.0.0.1:27017/shh_magical_secret_db");


var Vegetable = new mongooseConnection.Schema({
  name: String,
  flavor: String
});

var Unicorn = new mongooseConnection.Schema({
  name: String,
  magical_power: String,
  coat: {
    color1: String,
    color2: String,
    color3: String,
    color4: String,
    color5: String
  },
  wings_type: String,
  alicorn: [Vegetable],
  nemesis: String
});

mongooseConnection.model("Vegetable", Vegetable);
mongooseConnection.model("Unicorn", Unicorn);

module.exports = mongooseConnection;
