//role(admin,teacher,student)
//id
//username
//password
//email
//
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    username: {type: String, required: true},
    id:{type:Int32Array,required:true},
    role:{type: String,required:true},
    password: {type:String,required:true},
    email:{type:String,required:true},
    
    
});

const UserAdmin = mongoose.model('UserAdmin', taskSchema);
module.exports = UserAdmin;