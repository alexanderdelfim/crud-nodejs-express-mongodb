const express = require('express');
const routes = express.Router();

routes.use(function(req, res, next) {
  console.log(`New request recived for url: ${req.url}`);
  next();
})

routes.get('/api', function (req, res) {
  res.status(200).send({
    success: true,
    message: 'Hello World!',
  });
});

module.exports = routes;