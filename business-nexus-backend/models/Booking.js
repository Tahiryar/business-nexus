const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
