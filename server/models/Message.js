// models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
