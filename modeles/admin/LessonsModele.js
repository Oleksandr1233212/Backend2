const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    name: {type: String, required: true},
    id:{type:Int32Array,required:true},
    desc:{type: String,required:true},
    dateStart: {type:Date,required:true},
    dateEnd:{type:Date,required:true},
    creator: {type:String, required:true}
    
});

const LessonAdmin = mongoose.model('LessonAdmin', taskSchema);
module.exports = LessonAdmin;