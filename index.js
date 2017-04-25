const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

//Set up application
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/animals');
mongoose.Promise = global.Promise;

//Static directory
app.use(express.static(__dirname + '/dist'));

//Body parser middleware
app.use(bodyParser.json());

//Initialize routes middleware
app.use('/api', routes);

//Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//Set up server
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for requests');
});
