const User = require('../models/user');


const newUser = async (req, res) => {
  let user = new User(req.body)
  console.log(user);
  try {
    await user.save();
    res.status(200).json({ NewUser: user });
  }
  catch (error) {
    res.send("cannot save new user: ", error.message)
  }
}

const getAllUsers = async (req, res) => {


  try {
    let users = await User.find();
    if(users===null)
    {
      res.send("could not have user")
    }
    return res.json({status:200,users:users})
  }
  catch (error) {
    res.status(500).json({myMessage: error.message})
  }
}


module.exports = { newUser,getAllUsers }

