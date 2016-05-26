var mongoose        = require("./db/connection");
var express         = require("express");
var hbs             = require("express-handlebars");
var parser          = require('body-parser');

var app = express();

var Unicorn = mongoose.model("Unicorn");
var Vegetable = mongoose.model("Vegetable");
app.use(parser.json({extended: true}));
app.use("/assets", express.static("public"));
app.set("port", process.env.PORT || 7777);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));


app.get("/api/unicorns/:name", function(req, res){
  Unicorn.findOne(req.params).then(function(unicorn){
    res.json(unicorn);
  });
});

app.get("/api/unicorns", function(req, res){
  Unicorn.find().then(function(unicorns_db){
    res.json(unicorns_db);
  });
});

app.post("/api/unicorns", function(req,res){
  Unicorn.create().req.body.then(function(unicorn_baby){
    res.json(unicorn_baby);
  });
});

app.get("/*", function(req, res){
  res.render("layout-main", {layout:false});
});

app.listen(7777, function(){
  console.log("UNICORNZ 🦄");
});
