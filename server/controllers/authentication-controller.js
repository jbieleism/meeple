const User = require('../models/user');

module.exports.signup = (req, res) => {

  let user = new User(req.body);
  user.save();
  res.json(req.body);

}

module.exports.login = (req, res) => {

  User.find(req.body, (err, results) => {
    if (err){
      console.log('Error in backend signin: ', err)
    }
    if (results && results.length === 1) {
      let userData = results[0];
      console.log(userData.friends)
      res.json({
        username: req.body.username,
        _id: userData._id,
        friends: userData.friends
      })
    }
  })
}

