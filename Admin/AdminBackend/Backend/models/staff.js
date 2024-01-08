const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    StaffID:{type:String, required:true,unique:true},
    StaffName:{type:String,required:true},
    JobRole:{type:String, required:true},
    Password:{type:String, required:true, },
    TeleNumber:{type:String, required:true},
    NICNumber:{type:String, required:true,unique:true},
    DateofBirth:{type:String, required:true},
    
})

const staff = mongoose.model('staff',staffSchema);

module.exports = staff;
