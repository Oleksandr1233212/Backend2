//course id
//many users id

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    
    courseid: {type: String, required: true},
    userid:{type:Number,required:true},
    idcolumn:{type:Number,required:true}
    
});

const CourseUserAdmin = mongoose.model('CourseUserAdmin', taskSchema);
module.exports = CourseUserAdmin;