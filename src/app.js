const dotenv = require('dotenv/config');
const express =  require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

const routes =  require('./routes/index');

mongoose.connect(' mongodb://127.0.0.1:27017/crud_api_node');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;