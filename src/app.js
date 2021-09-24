const express = require('express');
const cors = require('cors');
const mongooseConnection = require('./config/mongooseConnection.config');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.set('mongoose connection', mongooseConnection);

module.exports = app;