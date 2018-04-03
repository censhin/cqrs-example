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
  return widgetModel.find({}, function (err, data) {
    if (err) console.log(err);
    return res.json(data);
  });
}