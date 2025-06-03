const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Message = require('../models/Message');

// Submit message (public)
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newMsg = new Message({ name, email, subject, message });
    await newMsg.save();
    res.status(201).json({ msg: 'Message sent' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all messages (protected)
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;