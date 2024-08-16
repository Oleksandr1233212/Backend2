
const express = require('express');
const { findt } = require('../controllers/TeamController');
const multer = require('multer');

const router = express.Router();
router.get('/team', findt)


module.exports = router;