
const express = require('express');
const LessonAdmin = require('../../controllers/admin/LessonsController.js');
const multer = require('multer');
const {findd} = require('../../middleware/Cources')
const router = express.Router();
router.get('/lesson', findd(LessonAdmin))
// router.get('/get', getTasks);
// router.get('/data/:id', getTaskById);
// router.post('/add', multer().none(), addTask);
// router.post('/del', deleteTask);
// router.post('/upd', multer().none(), updateTask);

module.exports = router;