require ("dotenv").config() 
const express = require("express")
const app = express()
// const router = require("./routes/authRoutes")
const connectDB = require("./utils/db")

app.use(express.json())

const PORT = 5000

connectDB().then(() => {
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    })