const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

Router.post('/', async (req, res) => {

    const { username, email, password } = req.body;
    
    try {
        const hashedPass = await bcrypt.hash(password, 10);
    
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already exists" });
    
        const newUser = new User({ username, email, password: hashedPass });
        const savedUser = await newUser.save();
    
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
        res
          .status(201)
          .json({
            token,
            user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
            username: newUser.username
          });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

module.exports = Router;