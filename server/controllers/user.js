const userModel = require('../model/user');
const {normalizeError,checkUser}  = require('../helpers/mongoose');
const constValues = require('../dbcredentials');
const jwt = require('jsonwebtoken');

exports.register = (req, res)=>{
    const { userName, email, password, confirmPassword } = req.body;
    userModel.findOne({email}).then((err, res)=>{
        
    })
   const user = new userModel({
       userName, email, password
   });
   user.save((err)=>{
       if(err){
           return res.status(422).send(normalizeError(err.errors));
       }
       return res.json({"status":true});
   })
}
exports.login = (req, res)=>{
    const {email, password} = req.body;
    let user = '';
    checkUser(email, password).then((user, error)=>{
        console.log("user" + user);
        if(user){
            const jwtId =  jwt.sign({
              Id: user._id,
              email: user.email,
            }, constValues.SECRET_ID, { expiresIn: '1h' });
          return res.json(jwtId);
        }
        else return res.status(422).send({title: 'Login Error', details: 'Invalid username or password'});
    });
   

    
};