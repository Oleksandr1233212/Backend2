//id event
//id user
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    courseid: {type: String, required: true},
    userid:{type:Int32Array,required:true},
    idcolumn
    
});

const EventUserAdmin = mongoose.model('EventUserAdmin', taskSchema);
module.exports = EventUserAdmin;