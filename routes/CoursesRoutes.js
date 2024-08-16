
const express = require('express');
const { findc } = require('../controllers/CourseController');
const multer = require('multer');

const router = express.Router();
router.get('/cources', findc)


module.exports = router;