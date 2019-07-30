const userModel = require('../model/user');
const {normalizeError,checkUser}  = require('../helpers/mongoose');
const constValues = require('../dbcredentials');
const jwt = require('jsonwebtoken');

exports.register = (req, res)=>{
    const userName = req.body.username;
    const { email, password, confirmPassword } = req.body;
    // console.log(req);
    userModel.findOne({email}).then((err, res)=>{
        
    })
   const user = new userModel({
       userName, email, password
   });
   user.save((err)=>{
       if(err){
           if(err.errmsg){
            return res.status(422).send({title:"Email already exist" ,details:"Email already registred, please select another email or try to login"});
           }
        
           return res.status(422).send(normalizeError(err.errors));
       }
       return res.json({"status":true});
   })
}
exports.login = (req, res)=>{
    const {email, password} = req.body;
    let user = '';
    checkUser(email, password).then((user, error)=>{
        // console.log("user" + user);
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

exports.authMiddleware = async function(req,res,next) {
    const token = req.headers.autherization;

    if(token){
        try{
            const user = await jwt.verify(token.split(' ')[1], constValues.SECRET_ID);
            if(user){
            const dbUser =  await userModel.findById(user.Id);
            // console.log('DBuser', dbUser);
            res.locals.user = dbUser;
            next()
            }else return res.status(422).send({title: 'Login Error', details: 'Session timeout, please login again'});
        }catch(e){
            return res.status(422).send({title: 'Login Error', details: 'Session timeout/Invalid token, please login again'});
        }
    }else{
        return res.status(422).send({title: 'Login Error', details: 'Please login'});
    }
    
}