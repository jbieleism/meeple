const User = require('../models/user-model');

module.exports.signup = function(req, res){
  console.log("Req: ", req)
  let user = new User;
  user.save();
  res.json(req.body)
}