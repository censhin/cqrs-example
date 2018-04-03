const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

import { createWidget } from './controller';

const app = express();
app.use(bodyParser.json());

const host = '0.0.0.0';
const port = 9001;

const mongoUrl = 'mongodb://localhost:27017/cqrs';

mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.send('I am alive');
});

app.post('/widgets', (req, res) => {
  createWidget(req, res);
});

app.listen(port, host, () => {
  console.log('App listening on port %s.', port);
});
