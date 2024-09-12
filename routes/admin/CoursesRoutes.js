
const express = require('express');
const CourseAdmin = require('../controllers/admin/CoursesController.js');
const multer = require('multer');
const {findd} = require('../middleware/Cources')
const add = require('../../middleware/Adding.js')
const router = express.Router();
router.get('/coursesadmin', findd(CourseAdmin))
router.get('/coursesadminadd',add(CourseAdmin))
// router.get('/get', getTasks);
// router.get('/data/:id', getTaskById);
// router.post('/add', multer().none(), addTask);
// router.post('/del', deleteTask);
// router.post('/upd', multer().none(), updateTask);

module.exports = router;