
require('dotenv').config();
const express = require('express');
const cors = require("cors"); 
const connectDB = require('./config/database');
const CourseRoutes = require('./routes/CourcesRoutes');
const userRoutes = require('./routes/userRoutes');
const CourceRoutes = require('./routes/CoursesRoutes')
const TeamRoutes = require('./routes/TeamRoutes')
const TestimRoutes=require('./routes/TestimonialRoutes')
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/taskmanagerapp', CourseRoutes);
app.use('/api/taskmanagerapp', userRoutes);
app.use('/api/taskmanagerapp', CourceRoutes);
app.use('/api/taskmanagerapp', TeamRoutes);
app.use('/api/taskmanagerapp', TestimRoutes);
const PORT = process.env.PORT || 5040;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
});