const dotenv = require('dotenv/config');
const express =  require('express');
const cors =  require('cors');

const routes =  require('./src/routes/index');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;