const express = require("express");
const bp = require("body-parser");

var app = express();
var port = 8000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});