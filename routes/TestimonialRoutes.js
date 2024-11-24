
const express = require('express');
const Testim = require('../controllers/TestimonialController');
const multer = require('multer');
const {findd} = require('../middleware/Cources')
const router = express.Router();
router.get('/testim', findd(Testim))


module.exports = router;