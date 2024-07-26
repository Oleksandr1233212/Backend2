
const express = require('express');
const { getTasks, getTaskById, addTask, deleteTask, updateTask } = require('../controllers/taskController');
const multer = require('multer');

const router = express.Router();

router.get('/get', getTasks);
router.get('/data/:id', getTaskById);
router.post('/add', multer().none(), addTask);
router.post('/del', deleteTask);
router.post('/upd', multer().none(), updateTask);

module.exports = router;