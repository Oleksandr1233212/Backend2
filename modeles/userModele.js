const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String},
  gender: { type: String, default: '-' },
  dateOfBirth: { type: String, default: '-' },
  roll: { type: String, default: '-' },
  bloodGroup: { type: String, default: '-' },
  religion: { type: String, default: '-' },
  email: { type: String, required: true },
  class: { type: String, default: '-' },
  section: { type: String, default: '-' },
  admissionId: { type: String, default: '-' },
  phone: { type: String, default: '-' },
  role: { type: String, default: 'someone' },
  password: {type: String}
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;