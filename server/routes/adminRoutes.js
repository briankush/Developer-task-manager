const express = require('express');
const router = express.Router();
// middleware to verify admin role
const { authorizeAdmin } = require('../middleware/auth');
// User model
const User = require('../models/User');

router.get('/users', authorizeAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
