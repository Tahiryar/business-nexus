const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
  res.status(200).json({
    message: "Profile data fetched successfully",
    user: req.user
  });
});

module.exports = router;
