const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
    required: true,
  },
  description: {
    type: String,
    maxlength: 255,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'producs',
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
