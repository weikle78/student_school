const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new mongoose.Schema({
    firstName: {type:String, trim:true, default:''},
    lastName: {type:String,  trim:true,default:''},
    address: {type:String, trim:true,default:''},
    city: {type:String,  trim:true,default:''}, 
    state: {type:String,  trim:true,default:''},
    school: {type:String,  trim:true,default:''},
    grade: {type:String,  trim:true,default:''},
    email: {type:String,  trim:true,default:''},
    phone: {type:String,  trim:true,default:''}

})

module.exports = mongoose.model('Student', Student)