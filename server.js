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

app.post("/send", (req, res) => {

  console.log(req.body);
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const phNum = req.body.phNum;
  const email = req.body.email;
  const msg = req.body.msg;

  // console.log(firstName, lastName, email);
  const data = {
  members : [
      {
      email_address: email,
      status : "subscribed",
      merge_fields : {
          FNAME : firstName,
          LNAME : lastName,
          PHONE : phNum,
          MESSAGE : msg
      }
      }
  ]   
  };

  const jsonData = JSON.stringify(data);

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
          res.redirect("/contact");
      }
      else res.send("/failure.html");
  })

  request.write(jsonData);
  request.end();

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port");
});
