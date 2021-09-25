const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongooseConnection = require('./config/mongooseConnection.config');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);

app.set('mongoose connection', mongooseConnection);

module.exports = app;
