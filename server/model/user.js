const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);