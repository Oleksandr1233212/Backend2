
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/taskmanagerapp', taskRoutes);
app.use('/api/taskmanagerapp', userRoutes);

const PORT = process.env.PORT || 5035;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
});