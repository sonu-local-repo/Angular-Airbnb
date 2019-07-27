const userModel = require('../model/user');

exports.userLogin = (req, res)=>{
    const { userName, email, password, confirmPassword } = req.body;
    userModel.findOne({email}).then((err, res)=>{
        
    })
   const user = new userModel({
       userName, email, password
   });
   user.save(()=>{
       res.json({"status":true});
   })
}