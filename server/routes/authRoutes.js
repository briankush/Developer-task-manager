const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

// Signup
router.post("/signup", async (req, res) => {
  // ...your signup logic...
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // ...validate credentials, generate token, fetch user...
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;