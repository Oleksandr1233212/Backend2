const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: Student routes
 */

/**
 * @swagger
 * /api/auth/student/dashboard:
 *   get:
 *     summary: Student dashboard
 *     tags: [Student]
 *     description: Returns a welcome message for student users.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome message for student.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to the Student Dashboard!
 *       401:
 *         description: Unauthorized - No token provided or invalid token.
 *       403:
 *         description: Forbidden - User does not have student privileges.
 */
router.get('/dashboard', verifyToken, checkRole(['student']), (req, res) => {
    res.status(200).json({ message: 'Welcome to the Student Dashboard!' });
});

module.exports = router;
