const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(__dirname + "/public"));

require('dotenv').config();

app.get("/", async(req, res) => {
  res.render("home");
})

app.get("/projects", async(req, res) => {
  res.render("projects");
})

app.get("/resume", async(req, res) => {
  res.render("resume");
})

app.get("/contact", async(req, res) => {
  res.render("contact", {successMessage : ""});
})

app.post("/send", (req, res) => {

  const fullName = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  //processing Fullname
  var firstName = fullName.split(' ').slice(0, -1).join(' ');
  var lastName = fullName.split(' ').slice(-1).join(' ');

  const messageData = {
  members : [
      {
      email_address: email,
      status : "subscribed",
      merge_fields : {
          FNAME : firstName,
          LNAME : lastName,
          MESSAGE : message,
          SUBJECT : subject
        }
      }
  ]   
  };

  const jsonData = JSON.stringify(messageData);

  const url = "https://us8.api.mailchimp.com/3.0/lists/"+process.env.MC_ListID;
  const options = {
      method: "POST",
      auth: process.env.MC_API_Key
  };

  const request = https.request(url, options, function(response) {
      response.on("data", (data) => {
          console.log(JSON.parse(data));
      })

      if(response.statusCode ===200){
        res.render("contact", {successMessage : "Congratulations. Your message has been successfully sent. Thanks for reaching out.!"});
      }
      else {
        res.render("contact", {successMessage : "Sorry, some issue occurred. Try again?"});
        console.log("Failed");        
      }
  })

  request.write(jsonData);
  request.end();

});

app.listen(process.env.PORT || 3000, function() {
  process.env.PORT ? console.log("Server started on port") : console.log("Server started on port 3000");
});
