const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
    },
    rollno: {
        type: String,
    },
    email:{
        type: String,
    },
    
})