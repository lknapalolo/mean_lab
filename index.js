var mongoose        = require("mongoose");
var express         = require("express");
var hbs             = require("express-handlebars");


var app = express();

var Unicorn = mongoose.model("Unicorn");
var Vegetable = mongoose.model("Vegetable");
var color = mongoose.model("Color");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/", express.static(""));
app.use(parser.urlencoded({extended: true}));
