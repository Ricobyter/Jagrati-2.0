const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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

userSchema.pre(('save'), async function(next){
 const user = this;

 if(!user.isModified('password')){
     next()
 }

 try{
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)
    user.password = hashPassword

 } catch(err){
    next(error)
 }

})

//*Comparing the password
userSchema.methods.comparePassword = async function(password){
    try{
        const isMatch = await bcrypt.compare(password, this.password)
        return isMatch
    }catch(err){
        console.log(err)
    }
}


//json webtoken
//? instance methods
// userSchema.methods.generateToken = async function(){
//  try{
//     const token = jwt.sign({ 
//         userId : this._id.toString(),
//         email: this.email,
//         role: this.role
//     }, SECRETENVKEY, 
//     {expiresIn: '12h'})
//     return token
//  }catch(err){
//     console.log(err)
//  }
// }

const User = mongoose.model('User', userSchema);
module.exports = User;