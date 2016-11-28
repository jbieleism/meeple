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

  // request initiator
  let requester = req.body.requestedBy;
  let userId = req.body.requesterId;

  // new friend
  let newFriend = {
    friendName: req.body.friendRequested,
    friendId: req.body.friendRequestedId
  }

  User.findById(userId, (err, userResults) => {
    userResults.friends.push(newFriend)
    console.log(userResults.friends)
    userResults.save();
  })

}



