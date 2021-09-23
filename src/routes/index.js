const express = require('express');
const routes = express.Router();

routes.get('/api', function (req, res) {
  res.send('Hello World!');
});

module.exports = routes;