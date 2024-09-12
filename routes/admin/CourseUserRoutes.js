
const express = require('express');
const CourseUserAdmin = require('../controllers/admin/CoursesUsersController.js');
const multer = require('multer');
const {findd} = require('../middleware/Cources')
const router = express.Router();
router.get('/courses', findd(CourseUserAdmin))
// router.get('/get', getTasks);
// router.get('/data/:id', getTaskById);
// router.post('/add', multer().none(), addTask);
// router.post('/del', deleteTask);
// router.post('/upd', multer().none(), updateTask);

module.exports = router;