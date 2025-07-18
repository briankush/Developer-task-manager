const express = require('express');
const router = express.Router();
const { authorizeAdmin } = require('../middleware/auth');
const User = require('../models/User');

// GET all users (admin only)
router.get('/users', authorizeAdmin, async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
module.exports = router;
