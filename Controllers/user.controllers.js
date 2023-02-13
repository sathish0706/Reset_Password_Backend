const Users = require("../Models/user.models");


exports.postUser = async (req,res) => {
  try{
 let payload = req.body;
      if(!payload.password){
        return res.status(400).send({message : 'Password is required'});
      }
      let hashValue = await bcrypt.hash(payload.password, 10);

      payload.hashedPassword = hashValue;
      delete payload.password;


      let newUser = new Users(payload)

      newUser.save((err, data) => {
        if(err){
            return res.status(400).send({message : "Error while registering the user",Error:err})
        }
        res.status(201).send({message: 'user has been registered succesfully', userID: data._id})
      })
  }catch(err){
    console.log("error", err)
  }
}


exports.getUser = async (req, res) => {
  try {
    const id = req.id;
    let user = await Users.findById(id);

    if (user) {
      user = user.toObject();
      delete user["hashedPassword"];

      return res.status(200).send({ success: true, user: user });
    }
    return res
      .status(400)
      .send({ success: false, message: "User doesnt exist." });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
