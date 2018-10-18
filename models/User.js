const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchma = new Schema({
    name:{
        type:String,
        require:true
    },
     email: {
         type: String,
         require: true
     },
     password: {
         type: String,
         require: true
     }
     ,
     avater: {
         type: String
     }
     ,
     date: {
         type: String,
        default:Date.now
     }
})
module.exports = User = mongoose.model("users",UserSchma)