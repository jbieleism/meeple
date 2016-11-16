const User = require('../models/user');

module.exports.signup = (req, res) => {
  console.log("Req: ", req.body);
  let user = new User(req.body);
  user.save();
  res.json(req.body);
}

module.exports.login = (req, res) => {
  console.log(req.body)
  User.find(req.body, (err, results) => {
    if (err){
      console.log('Error in backend signin: ', err)
    }
    else{
      console.log("Some results ", results)
      res.json({
        username: req.body.username

      })
    }
  })
}

