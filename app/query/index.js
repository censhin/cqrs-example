const express = require('express');
const mongoose = require('mongoose');

import { getWidgets } from './services';

const app = express();
const host = '0.0.0.0';
const port = 9000;

const mongoUrl = 'mongodb://localhost:27017/cqrs';

mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.send('I am alive');
});

app.get('/widgets', (req, res) => {
  getWidgets(req, res);
});

app.listen(port, host, () => {
  console.log('App listening on port %s.', port);
});
