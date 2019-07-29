const userModel = require('../model/user');
const bcrypt = require('bcrypt');

exports.normalizeError = (errors)=>{
    let normalizedError = [];
    for(property in errors){
        if(errors.hasOwnProperty(property)){
            normalizedError.push({title: property, details: errors[property].message});
        }
    }
return normalizedError;
};

exports.checkUser = async function (username, password) {
   const user = await userModel.findOne({email:username});
    if(user._id){
        const match = await bcrypt.compare(password, user.password);
        // console.log(match);
        if(match) {
            // console.log("user"+user);
            return user; 
        }else return false; 
    }

}