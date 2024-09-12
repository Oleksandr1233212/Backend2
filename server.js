
require('dotenv').config();
const express = require('express');
const cors = require("cors"); 
const connectDB = require('./config/database');
const CourseRoutes = require('./routes/CourcesRoutes');
const userRoutes = require('./routes/userRoutes');
const CourceRoutes = require('./routes/CoursesRoutes')
const TeamRoutes = require('./routes/TeamRoutes')
const TestimRoutes=require('./routes/TestimonialRoutes')
const CourseAdminRoutes=require('./routes/admin/CoursesRoutes')
const CourseUserRoutes=require('./routes/admin/CourseUserRoutes')
const EventAdmin=require('./routes/admin/EventRoutes')
const EventUserAdmin=require('./routes/admin/EventUserRoutes')
const LessonAdmin=require('./routes/admin/LessonRoutes')
const UserAdmin=require('./routes/admin/UserRoutes')
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/taskmanagerapp', CourseRoutes);
app.use('/api/taskmanagerapp', userRoutes);
app.use('/api/taskmanagerapp', CourceRoutes);
app.use('/api/taskmanagerapp', TeamRoutes);
app.use('/api/taskmanagerapp', TestimRoutes);

app.use('/api/taskmanagerapp', CourseAdminRoutes);
app.use('/api/taskmanagerapp', UserAdmin);
app.use('/api/taskmanagerapp', LessonAdmin);
app.use('/api/taskmanagerapp', CourseUserRoutes);
app.use('/api/taskmanagerapp', EventAdmin);
app.use('/api/taskmanagerapp', EventUserAdmin);
const PORT = process.env.PORT || 5040;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
});