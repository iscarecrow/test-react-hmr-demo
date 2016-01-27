"use strict";

var path = require('path');
var express = require('express');

var app = express();


app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);