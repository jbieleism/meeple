var mongoose = require('mongoose');


module.exports = mongoose.model('Chat', {
  author: String,
  message: String,
  channel: String,
  date: String
});