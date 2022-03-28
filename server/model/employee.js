const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    emp_img: {type : String},
    empID : {type : String},
    empFN : {type : String},
    empLN  : {type : String},
    DOB : {type:String},
    Dad_name : {type:String},
    Mom_name : {type:String},
    Address  : {type : String},
    State : {type : String},
    Country : {type : String},
    Zip_Pin : {type : String},
    Number : {type : String  },
    Location : {type : String  },
    Domain: {type : String  },
    Salary:{type : String},
})

module.exports = mongoose.model('Employee' , employeeSchema)
