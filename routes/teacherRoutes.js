const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: Teacher routes
 */

/**
 * @swagger
 * /api/auth/teacher/dashboard:
 *   get:
 *     summary: Teacher dashboard
 *     tags: [Teacher]
 *     description: Returns a welcome message for teacher and admin users.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome message for teacher or admin.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to the Teacher Dashboard!
 *       401:
 *         description: Unauthorized - No token provided or invalid token.
 *       403:
 *         description: Forbidden - User does not have teacher or admin privileges.
 */
router.get('/dashboard', verifyToken, checkRole(['admin', 'teacher']), (req, res) => {
    res.status(200).json({ message: 'Welcome to the Teacher Dashboard!' });
});

module.exports = router;
