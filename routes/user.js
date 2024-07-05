const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create a new user
router.post("/create", async (req, res) => {
  try {
    const { name, age, email, city, salary } = req.body;
    const user = new User({ name, age, email, city, salary });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {});

module.exports = router;
