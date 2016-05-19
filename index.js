var mongoose        = require("./db/connection");
var express         = require("express");
var hbs             = require("express-handlebars");


var app = express();

var Unicorn = mongoose.model("Unicorn");
var Vegetable = mongoose.model("Vegetable");
var Color = mongoose.model("Colors");

app.use("/assets", express.static("public"))
app.set("port", process.env.PORT || 7777);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/unicorngrove", function(req, res){
  Unicorn.find({}).then(function(unicorn_db){
  res.render("layout-main", {
      unicorns: unicorn_db,
      layout: false
    })
  })
})

app.get("/api/unicorns", function(req, res){
  Unicorn.find().then(function(unicorn_db){
    res.json(unicorn_db)
  })
})

app.get("/*", function(req, res){
  res.render("layout-main", {layout:false})
})

app.listen(7777, function(){
  console.log("UNICORNZ 🦄");
})
