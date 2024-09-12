//course id
//many users id

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    courseid: {type: String, required: true},
    userid:{type:Int32Array,required:true},
    idcolumn
    
});

const CourseUserAdmin = mongoose.model('CourseUserAdmin', taskSchema);
module.exports = CourseUserAdmin;