var express = require("express");
var bp = require("body-parser");
var path = require("path");

var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, "./static")));
app.use(bp.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require('./server/models/quote.js');
require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});