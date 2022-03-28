const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concernSchema = new Schema({
    Name: String,
    ID: String,
    Msg: String   
});

module.exports = mongoose.model('Concern', concernSchema);