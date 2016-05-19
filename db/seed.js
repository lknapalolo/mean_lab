var mongoose    = require("./connection");
var dataCorn    = require("./seeds.json");

var Unicorn     = mongoose.model("Unicorn");
var Vegetable   = mongoose.model("Vegetable");

Unicorn.remove({}).then(function(){
  Unicorn.collection.insert(dataCorn).then(function(){
    process.exit();
  });
});
