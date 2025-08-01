const User = require("../models/User");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { studentId, name, email, password } = req.body;

    const userExists = await User.findOne({ studentId });
    if (userExists) {
      return res.status(400).json({ message: "Student ID already exists" });
    }

    const newUser = new User({ studentId, name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
