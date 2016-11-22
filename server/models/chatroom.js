const mongoose = require('mongoose');


module.exports = mongoose.model('Chatroom', {
  name: String,
  message: {
    username: String,
    messageBody: String,
    date: {
      type: Date,
      default: Date.now
    }
  }
});



