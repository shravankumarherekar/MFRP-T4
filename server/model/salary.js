const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    empID: String,
    empkey: String,
    name: String,
    empsalcode: String,
    paiddata: String,
    code: String,
    descr: String,
    bsalary: String,
    line: [{
        frequency: String,
        ptype: String,
        payval: String,
        amount: String
    }],
    gamount: String
});

module.exports = mongoose.model('Salary', SalarySchema);