
const express = require('express');
const Cource = require('../controllers/CourseController');
const {findd} = require('../middleware/Cources')
const multer = require('multer');

const router = express.Router();
router.get('/cources', findd(Cource))


module.exports = router;