const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const fs = require("fs");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8081;

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

var server = app.listen(port, function () {
  console.log("Random Quotes listening on port %s", server.address().port);
});
