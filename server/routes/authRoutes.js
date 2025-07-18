const express = require("express");
const { signup, login } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Add this if not present
router.post('/signup', async (req, res) => {
    try {
        // Example: destructure and validate input
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Example: check if user already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(409).json({ error: 'User already exists.' });
        // }

        // Example: create user (replace with your actual logic)
        // const user = new User({ email, password });
        // await user.save();

        // Respond with success (replace with your actual response)
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Signup error:', error); // Log the error for debugging
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

module.exports = router;