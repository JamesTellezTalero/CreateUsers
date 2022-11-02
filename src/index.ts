var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3000, ()=> console.log('running on port 3000'))
