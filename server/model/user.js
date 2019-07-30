const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required:true,
        min: [5, 'User Name must have minimum 5 charactors'],
        max: [15, 'User Name must not exeed 15 charactors']

    },
    email: {
        type: String,
        required:true,
        unique: true,
     
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        min: [5, 'Email must have minimum 5 charactors'],
        max: [15, 'Email must not exeed 15 charactors']

    },
    password: {
        type: String,
        min: [5, 'Password must have minimum 5 charactors'],
        max: [15, 'Password must not exeed 15 charactors']
    },
    confirmPassword: {
        type: String,
        min: [5, 'Password must have minimum 5 charactors'],
        max: [15, 'Password must not exeed 15 charactors']
    }
});

userSchema.methods.isValidPassword = function(password){
    const passwordMatched = bcrypt.compareSync(password, this.password);
    // console.log(passwordMatched);
    return bcrypt.compareSync(password, this.password);
}

userSchema.pre('save',function(next){
    const saltRounds = 10;
 
    const user = this;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        
      bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash;
          next();
      });
  });
});




module.exports = mongoose.model('User', userSchema);