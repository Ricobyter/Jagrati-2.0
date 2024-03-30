const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        },
    email: {
        type: String,
        },
    gender: {
        type: String,
        },
    designation: {
        type: String,
        },
    year: {
        type: Number,
        },
    password: {
        type: String,
        },
    setAvatar : {
        type: String,
        default: 'https://https://www.vecteezy.com/png/24983914-simple-user-default-icon'
    },
    role: {
        type: String,
        default: 'user'
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;