
const express = require('express');
const { findh } = require('../controllers/TestimonialController');
const multer = require('multer');

const router = express.Router();
router.get('/testim', findh)


module.exports = router;