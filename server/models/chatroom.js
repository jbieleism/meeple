const mongoose = require('mongoose');


module.exports = mongoose.model('Chatroom', {
  users: Array,
  messages: Array
})