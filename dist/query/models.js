'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var widgetSchema = new mongoose.Schema({
  name: String,
  description: String
});

exports.default = widgetSchema;