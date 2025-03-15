require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database');

// Імпорт маршрутів
const publicRoutes = require('./routes/publicRoutes'); // Публічні маршрути (курси, команда, відгуки)
const userRoutes = require('./routes/userRoutes'); // Логін, реєстрація
const adminRoutes = require('./routes/adminRoutes'); // Захищені маршрути для адміністратора
const teacherRoutes = require('./routes/teacherRoutes'); // Захищені маршрути для вчителя
const studentRoutes = require('./routes/studentRoutes'); // Захищені маршрути для студента

// Імпорт Swagger
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Swagger документація
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Swagger за адресою /api-docs

// Публічні маршрути
app.use('/api', publicRoutes); // Наприклад, перегляд курсів або команди

// Захищені маршрути
app.use('/api/auth', userRoutes); // Логін, реєстрація, рефреш токенів
app.use('/api/auth/admin', adminRoutes); // Захищені маршрути для адміністратора
app.use('/api/auth/teacher', teacherRoutes); // Захищені маршрути для вчителя
app.use('/api/auth/student', studentRoutes); // Захищені маршрути для студента

// Підключення до бази даних
const PORT = process.env.PORT || 5048;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database', error);
});
