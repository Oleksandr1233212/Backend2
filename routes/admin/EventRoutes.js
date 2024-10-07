
const express = require('express');
const EventAdmin = require('../../controllers/admin/EventsController.js');
const multer = require('multer');
const {findd} = require('../../middleware/Cources')
const router = express.Router();
router.get('/event', findd(EventAdmin))
// router.get('/get', getTasks);
// router.get('/data/:id', getTaskById);
// router.post('/add', multer().none(), addTask);
// router.post('/del', deleteTask);
// router.post('/upd', multer().none(), updateTask);

module.exports = router;