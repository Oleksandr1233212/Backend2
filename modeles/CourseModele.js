
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    // author: { type: String, required: true },
    // data: { type: Date, required: true },
    // category: { type: String, required: true },
    // edited: { type: Date },
    // completed: { type: Boolean, required: true },
    // added: { type: Date, default: Date.now },
    // timecomplited: { type: Date }
    
    name: {type: String, required: true},
    amount: {type: Number, required:true},
    number: {type:Number,required:true},
    price: {type:Number,required:true},
    otziv:{type:Number,required:true},
    student:{type:Number,required:true},
    time:{type:String,required:true},
    uchitel:{type:String,required:true}

   
});

const Cource = mongoose.model('Cource', taskSchema);
module.exports = Cource;