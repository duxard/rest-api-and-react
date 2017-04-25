const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Generic animals's Schema
const AnimalsSchema = new Schema({
    animal: {
        type: String,
        required: [true, 'Name field is required']
    }
});

const Animals = mongoose.model('animals', AnimalsSchema);

module.exports = Animals;