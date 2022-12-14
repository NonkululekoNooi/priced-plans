const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const price_plan = require("./price_planff");
const pgp = require("pg-promise")();
const app = express();


let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}

const DATABASE_URL =process.env.DATABASE_URL || "postgresql://postgres:pg123@localhost:5432/priceplan";

const config = {
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = pgp(config);


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

app.get("/calc_bill", function(req, res){
    res.render("calc_bill")

})

app.post("/calc_bill", function(req, res){
  res.render("calc_bill")
})

app.get("/price_plans", function(req, res){

  res.render("price_plans")
})
app.get("/price_plans/:id", function(req, res){

  res.render("price_plans/:id")
})

app.get("/link_user", function(req, res){

  res.render("link_user")
})

app.post("/link_user", function(req, res){

  res.render("price_plans/:id")
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
  console.log("APP STARTED AT PORT", PORT);
});