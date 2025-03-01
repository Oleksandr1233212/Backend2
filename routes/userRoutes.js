const express = require('express');
const multer = require('multer');
const { registerUser, loginUser, refreshAccessToken, users } = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

console.log('ddsdsds');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication and token management routes
 */

// Реєстрація користувача
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *                 example: johndoe4444
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: mypassword
 *               role:
 *                 type: string
 *                 description: User's role (e.g., student, teacher, admin)
 *                 example: student
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Server error
 */
router.post('/register', multer().none(), registerUser);
router.get('/users', multer().none(), users);
// Логін користувача
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *                 example: johndoe4444
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: mypassword
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful!
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', multer().none(), loginUser);

// Оновлення Access Token
/**
 * @swagger
 * /auth/refresh:
 *   get:
 *     summary: Refresh Access Token
 *     tags: [Auth]
 *     description: Generates a new Access Token using a valid Refresh Token stored in cookies.
 *     responses:
 *       200:
 *         description: New Access Token generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: New Access Token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: No Refresh Token provided.
 *       403:
 *         description: Invalid or expired Refresh Token.
 */
router.get('/refresh', refreshAccessToken);

// Захищений маршрут для перегляду профілю
/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile data
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Invalid or expired token
 */
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome !!!, ${req.user.role}!`, user: req.user });
});

// Захищений маршрут для адміністраторів
/**
 * @swagger
 * /auth/admin-data:
 *   get:
 *     summary: Get admin-only data
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin-only data
 *       403:
 *         description: Access denied
 *       401:
 *         description: Unauthorized
 */
router.get('/admin-data', verifyToken, checkRole(['admin']), (req, res) => {
    res.status(200).json({ message: 'This is admin-only data.' });
});

module.exports = router;
