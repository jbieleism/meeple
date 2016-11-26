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

