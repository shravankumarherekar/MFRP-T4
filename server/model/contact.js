const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    Name: String,
    Mail: String,
    Num : String,
    Msg : String
});

module.exports = mongoose.model('Contact', contactSchema);