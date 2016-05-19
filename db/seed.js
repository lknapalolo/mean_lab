var mongoose = require("./connection")

var Unicorn = mongoose.model("Unicorn");
var Vegetable = mongoose.model("Vegetable");
var Colors = mongoose.model("Colors");

Unicorn.remove({}).then(function(){
  Unicorn.collection.insert(seed_data).then(function(){
    process.exit()
  })
})
