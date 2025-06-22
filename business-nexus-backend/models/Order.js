const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  title: String,
  price: Number,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
