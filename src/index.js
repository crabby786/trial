const express = require("express");
var bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//create a server object:
app.get("/", function (req, res) {
  // res.write(JSON.stringify(req?.query)); //write a response to the client
  // res.end(); //end the response
  let payload = encodeURI(req?.params);
  let url = "squiggle://auth?code=" + req?.query?.code;
  console.log("body", url);
  res.redirect(url);
});
app.get("/app", function (req, res) {
  // res.write(JSON.stringify(req?.query)); //write a response to the client
  // res.end(); //end the response
  let payload = encodeURI(req?.params);
  let url = "squiggle://?code=" + req?.query?.code;
  console.log("body", url);
  res.redirect(url);
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080

// app.post("/cb1", function (req, res) {
//   let data = req.body;
//   res.redirect("http://squiggle_native/auth");
//   // res.status(200).send(data); //write a response to the client
// });
// app.get("/cb2", function (req, res) {
//   res.redirect("http://squiggle_native/auth");
// });
