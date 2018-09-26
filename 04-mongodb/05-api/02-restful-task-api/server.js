const express = require("express");
const bp = require("body-parser");
const path = require("path");

var app = express();
var port = 8000;

app.use(bp.json());

require('./server/models/task.js');
require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});