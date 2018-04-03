'use strict';

var express = require('express');

var app = express();
var host = '0.0.0.0';
var port = 9001;

app.get('/', function (req, res) {
  res.send('I am alive');
});

app.listen(port, host, function () {
  console.log('App listening on port %s.', port);
});