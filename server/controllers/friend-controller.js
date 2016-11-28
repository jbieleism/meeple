const User = require ('../models/user');


module.exports.getUsers = (req, res) => {

  User.find({}, (err, results) => {
    if (err){
      res.send((err) => {
        console.log("There was an error: ", err)
      })
    }
    else{
      res.json(results);
    }
  })

}


module.exports.makeFriendship = (req, res) => {

  let requester = req.body.requestedBy;
  let userId = req.body.requesterId;
  let requested = req.body.friendRequested;

  User.findById(userId, (err, results) => {
    if (err){
      res.send((err) => console.log("There was an error in the make friendship function", err))
    }
    else{
      console.log("something goes here")
    }

  })

}



