const express = require('express');
const router = express.Router();
const Animals = require('../models/animals');

//get a list of animals from the DB
router.get('/animals', function(req, res, next){
    Animals.find({}).then(function(items){
        res.send(items);
    });
});

//add a new animal to the db
router.post('/animals', function(req, res, next){
    //var ninja = new Ninja(req.body);
    //ninja.save();
    Animals.create(req.body).then(function(item){
        res.send(item);
    }).catch(next);
});

module.exports = router;