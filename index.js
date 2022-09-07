const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const myPricePlan = require("./price_planff");
const pgp = require("pg-promise")();
const app = express();

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("index")
})

app.post("/User", function(req, res){
    
})

app.get("/action", function(req, res){
    res.render("action")

})

app.post("/action", function(req, res){
  res.render("action")
})

app.get("/price_plans", function(req, res){

  res.render("price_plans")
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
  console.log("APP STARTED AT PORT", PORT);
});