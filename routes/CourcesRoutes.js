
const express = require('express');
const { find } = require('../controllers/CourceController');
const multer = require('multer');

const router = express.Router();
router.get('/courses', find)
// router.get('/get', getTasks);
// router.get('/data/:id', getTaskById);
// router.post('/add', multer().none(), addTask);
// router.post('/del', deleteTask);
// router.post('/upd', multer().none(), updateTask);

module.exports = router;