'use strict';

var _services = require('./services');

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var host = '0.0.0.0';
var port = 9000;

var mongoUrl = 'mongodb://localhost:27017/cqrs';

mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

app.get('/', function (req, res) {
  res.send('I am alive');
});

app.get('/widgets', function (req, res) {
  (0, _services.getWidgets)(req, res);
});

app.listen(port, host, function () {
  console.log('App listening on port %s.', port);
});