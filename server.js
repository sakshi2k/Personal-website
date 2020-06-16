const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", async(req, res) => {
  res.render("index");
})

app.get("/projects", async(req, res) => {
  res.render("projects");
})

app.get("/resume", async(req, res) => {
  res.render("resume");
})

app.get("/contact", async(req, res) => {
  res.render("contact");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port");
});
