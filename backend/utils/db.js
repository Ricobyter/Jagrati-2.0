const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/jagrati"
// mogoose.connect(URI)
// const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Database connected successfully")
    }
    catch(err){
        console.log(err)
        process.exit(0)
    }
}

module.exports = connectDB

