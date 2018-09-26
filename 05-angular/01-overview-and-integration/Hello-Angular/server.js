const express = require("express");
const bp = require("body-parser");
const path = require("path");

var app = express();
var port = 8000;

app.use(bp.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/models/task.js');
require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});