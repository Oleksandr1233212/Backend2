
const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
        });
        console.log('MONGO DB Connection OK!');
    } catch (error) {
        console.error('MONGO DB Connection Error:', error);
        throw error;
    }
};

module.exports = connectDB;