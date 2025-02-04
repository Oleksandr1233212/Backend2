// // 1. Витягнення ролі з токена:
// import jwtDecode from 'jwt-decode';

// // Отримуємо токен із localStorage
// const token = localStorage.getItem('accessToken');

// if (token) {
//     // Розбираємо токен
//     const decoded = jwtDecode(token);
//     console.log('User role:', decoded.role); // Наприклад, "admin", "teacher", "student"
//     console.log('User ID:', decoded.userId);

//     // Залежно від ролі перенаправляємо користувача
//     switch (decoded.role) {
//         case 'admin':
//             window.location.href = '/admin-dashboard';
//             break;
//         case 'teacher':
//             window.location.href = '/teacher-dashboard';
//             break;
//         case 'student':
//             window.location.href = '/student-dashboard';
//             break;
//         default:
//             console.error('Unknown role!');
//     }
// } else {
//     console.error('No token found! Redirecting to login...');
//     window.location.href = '/login';
// }

// // 2. Побудова правильного маршруту для бекенду:
// // Фронтенд додає роль у базовий маршрут API.

// import axios from 'axios';

// const token = localStorage.getItem('accessToken');

// // Залежно від ролі, формуємо базовий URL
// const decoded = jwtDecode(token);
// const role = decoded.role; // Наприклад, "student", "teacher", "admin"

// const apiBaseUrl = `/api/auth/${role}`; // Наприклад: /api/auth/student

// // Надсилаємо запит до бекенду
// axios.get(`${apiBaseUrl}/dashboard`, {
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// })
//     .then((response) => {
//         console.log('Dashboard data:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error fetching dashboard:', error.response.data);
//     });



// //     2. Як бекенд перевіряє роль користувача
// // Алгоритм:
// // Перевірка Access Token:
// // Бекенд отримує Access Token у заголовку Authorization.
// // Розбирає токен і витягує роль (role).
// // Перевірка доступу до маршруту:
// // Middleware перевіряє, чи має користувач із цією роллю доступ до маршруту.


// // Реалізація:
// // 1. Middleware для перевірки токена:
// // Перевірка Access Token і додавання інформації про роль у req.user.

// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'No token provided!' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
//         req.user = decoded; // Додаємо інформацію з токена (userId, role) до req.user
//         next();
//     } catch (error) {
//         res.status(403).json({ message: 'Invalid or expired token!' });
//     }
// };

// module.exports = { verifyToken };


// // 2. Middleware для перевірки ролі:
// // Перевірка, чи дозволено цій ролі доступ до маршруту.

// const checkRole = (roles) => {
//     return (req, res, next) => {
//         if (!req.user || !roles.includes(req.user.role)) {
//             return res.status(403).json({ message: 'Access denied. Role not allowed!' });
//         }
//         next();
//     };
// };

// module.exports = { checkRole };


// // 3. Маршрут із перевіркою ролі:

// const express = require('express');
// const { verifyToken } = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// const router = express.Router();

// // Доступний тільки для адміністратора
// router.get('/dashboard', verifyToken, checkRole(['admin']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the Admin Dashboard!' });
// });

// // Доступний тільки для вчителя
// router.get('/teacher-data', verifyToken, checkRole(['teacher']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the Teacher Dashboard!' });
// });

// // Доступний тільки для студента
// router.get('/student-data', verifyToken, checkRole(['student']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the Student Dashboard!' });
// });

// module.exports = router;


// // 3. Повна схема запиту
// // Фронтенд
// // Витягує роль із токена.
// // Вибирає правильний маршрут на бекенді (/api/auth/admin/dashboard, /api/auth/teacher/dashboard, або /api/auth/student/dashboard).
// // Додає Access Token у заголовок.
// // Бекенд
// // Middleware перевіряє валідність Access Token (verifyToken).
// // Middleware перевіряє доступ на основі ролі (checkRole).
// // Якщо перевірки пройдені, бекенд повертає дані.

// // 4. Приклад роботи
// // Фронтенд

// const token = localStorage.getItem('accessToken');
// const decoded = jwtDecode(token);

// const role = decoded.role; // Наприклад, "student"
// const apiUrl = `/api/auth/${role}/dashboard`;

// axios.get(apiUrl, {
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// })
//     .then((response) => {
//         console.log('Dashboard data:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error:', error.response.data);
//     });
// });


// // Бекенд
// router.get('/dashboard', verifyToken, checkRole(['admin', 'teacher', 'student']), (req, res) => {
//     res.status(200).json({ message: `Welcome to the ${req.user.role} Dashboard!` });
// });

// // 5. Що важливо врахувати
// // Access Token містить роль.
// // Роль визначається на бекенді та перевіряється middleware.
// // Фронтенд орієнтується на роль із токена для вибору маршруту.
