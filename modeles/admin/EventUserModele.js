//id event
//id user
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    courseid: {type: String, required: true},
    userid:{type:Number,required:true},
    idcolumn:{type:Number,required:true}
    
});

const EventUserAdmin = mongoose.model('EventUserAdmin', taskSchema);
module.exports = EventUserAdmin;