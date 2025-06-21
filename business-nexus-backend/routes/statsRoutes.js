const express = require('express');
const User = require('../models/User');
const Booking = require('../models/Booking');
const Order = require('../models/Order');

const router = express.Router();

router.get('/bookings', async (req, res) => {
  const count = await Booking.countDocuments();
  res.json({ bookings: count });
});

router.get('/users', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const count = await User.countDocuments({ createdAt: { $gte: today } });
  res.json({ todayUsers: count });
});

router.get('/revenue', async (req, res) => {
  const orders = await Order.find();
  const total = orders.reduce((sum, order) => sum + order.price, 0);
  res.json({ revenue: total });
});

router.get('/followers', (req, res) => {
  res.json({ followers: 91 });
});

module.exports = router;
