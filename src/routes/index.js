const express = require('express');

const router = express.Router();

const index = require('./api.routes');
const productsRouter = require('./product.routes');

router.use((req, res, next) => {
  console.log(`New request recived for url: ${req.url}`);
  next();
});

router.use(index);
router.use('/api/products', productsRouter);

module.exports = router;
