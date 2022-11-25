const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan');

// Routes imported here
const userRoutes = require('./api/routes/user')
const postRoutes = require('./api/routes/Post')
const checkauthRoute = require('./api/routes/checkauth')

const db = 'mongodb://localhost:27017/hackathon';

// connecting to mongo db
mongoose.connect(db).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Error'))
mongoose.Promise = global.Promise;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handeling cors error

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})
// Routes to handel request
app.use('/user', userRoutes);
app.use('/postimage', postRoutes);
app.use('/checkauth', checkauthRoute);


//Error handeling
//if no paths matched

app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;