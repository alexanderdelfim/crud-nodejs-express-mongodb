const Product = require('../models/product.model');

exports.store = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    res.status(201).json({ message: 'Product created successfuly!', product });
  } catch (err) {
    res.send(`Error trying to save the Product: ${err}`);
  }
};
