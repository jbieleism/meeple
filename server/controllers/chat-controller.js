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



module.exports.getChats = (req, res) => {

  Chat.find({})
    .sort({date: -1})
    .exec((err, allChats) => {
      if (err){
        console.log("Error: ", error)
        res.error(err)
      }
      else{
        console.log(allChats)
        res.json(allChats);
      }
  });

};