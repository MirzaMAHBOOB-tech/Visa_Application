const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  message: String,
  isRead: {
    type: Boolean,
    default: false // unread by default
  },
  createdAt: {
    type: Date,
    default: Date.now // saves current date & time
  }
});

module.exports = mongoose.model('Contact', contactSchema);
