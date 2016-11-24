const Chat = require('../models/chat');

module.exports.postChat = (req, res) => {
  let chat = new Chat(req.body);
  chat.save();

  //will send all messages
  Chat.find({}, (err, allChats) => {
    if (err){
      res.error(err)
    }
    else{
      res.json(allChats);
    }
  });

};



module.exports.getChat = (req, res) => {

};