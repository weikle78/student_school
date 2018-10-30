const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const Student = new mongoose.Schema({
    firstName: {type:String, trim:true, default:''},
    lastName: {type:String, trim:true, default:''},
    age: 
    team:
    position:
})

module.exports = mongoose.model('Team', Team);