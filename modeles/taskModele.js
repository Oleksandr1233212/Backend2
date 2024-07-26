
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    data: { type: Date, required: true },
    category: { type: String, required: true },
    edited: { type: Date },
    completed: { type: Boolean, required: true },
    added: { type: Date, default: Date.now },
    timecomplited: { type: Date }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;