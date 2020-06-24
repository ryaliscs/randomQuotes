const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const fs = require("fs");

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

var server = app.listen(5000, function () {
  console.log("Random Quotes listening on port %s", server.address().port);
});
