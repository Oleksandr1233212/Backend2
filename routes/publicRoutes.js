const express = require('express');
const { findd } = require('../middleware/Cources');

// Імпорт контролерів
const CourseController = require('../controllers/CourceController');
const TeamController = require('../controllers/TeamController');
const TestimonialController = require('../controllers/TestimonialController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Public
 *   description: Publicly accessible routes
 */

// Маршрут для отримання списку курсів
/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 123
 *                   title:
 *                     type: string
 *                     example: Introduction to Programming
 *                   description:
 *                     type: string
 *                     example: Learn the basics of programming.
 */
router.get('/courses', findd(CourseController));

// Маршрут для отримання інформації про команду
/**
 * @swagger
 * /team:
 *   get:
 *     summary: Get team information
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: Team information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   role:
 *                     type: string
 *                     example: Lead Instructor
 */
router.get('/team', findd(TeamController));

// Маршрут для отримання відгуків
/**
 * @swagger
 * /testimonials:
 *   get:
 *     summary: Get testimonials
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: List of testimonials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Jane Smith
 *                   feedback:
 *                     type: string
 *                     example: Great course!
 */
router.get('/testimonials', findd(TestimonialController));


// Маршрут для отримання загальної інформації
/**
 * @swagger
 * /info:
 *   get:
 *     summary: Get general information
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: General information response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 description:
 *                   type: string
 *                   example: "API for public access with courses, team, and testimonials."
 */
router.get('/info', findd(TestimonialController));

module.exports = router;
