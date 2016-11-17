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
    else{
      res.json({
        username: req.body.username,

      })
    }
  })
}

