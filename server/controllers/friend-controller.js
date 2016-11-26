const User = require ('../models/user');


module.exports.getUsers = (req, res) => {

  let user = new User(req.body);
  User.find({}, (err, results) => {
    if (err){
      res.send((err) => {
        console.log("There was an error: ", err)
      })
    }
    else{
      console.log("These are the results: ", results)
    }
  })

}

