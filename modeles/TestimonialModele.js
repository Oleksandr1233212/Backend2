
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    
    name: {type: String, required: true},
    proff: {type: String, required:true},
    text: {type: String, required:true},
    number: {type:Number,required:true},
   

   
});

const Testim = mongoose.model('Testim', taskSchema);
module.exports = Testim;