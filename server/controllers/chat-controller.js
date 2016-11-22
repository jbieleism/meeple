var Chatroom = require('../models/chatroom');

module.exports = (req, res) => {

  let chatroom = new Chatroom(req.body);

  console.log(req.body)


}