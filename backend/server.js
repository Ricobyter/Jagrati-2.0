const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');//it is used to get the submitted input values
const app = express();
const port = process.env.POT || 3000;

// const EmployeeRoute = require('./routes/EmployeeRoutes')
// const AuthRoute = require('./routes/AuthRoutes'); 

mongoose.connect('mongodb://127.0.0.1:27017/jagratidb', {})
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Database Connection Established!');
})

app.listen(port, () => {
    console.log(`Server is running on port  ${port}`);
})
