const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  filetype: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Media', mediaSchema);
