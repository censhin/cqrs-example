'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWidgets = getWidgets;
var mongoose = require('mongoose');

var widgetSchema = new mongoose.Schema({
  name: String,
  description: String
});

function getWidgets(req, res) {
  var widgetModel = mongoose.model('widgets', widgetSchema);
  return widgetModel.find({}).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return console.log(err);
  });
}