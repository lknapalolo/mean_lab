var mongoose    = require("./connection");
var dataCorn    = require("./seeds.json");

var Unicorn     = mongoose.model("Unicorn");
var Vegetable   = mongoose.model("Vegetable");
var Colors      = mongoose.model("Colors");

Unicorn.remove({}).then(function(){
  Unicorn.collection.insert(dataCorn).then(function(){
    process.exit();
  });
});
