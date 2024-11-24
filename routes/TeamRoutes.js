
const express = require('express');
const Team = require('../controllers/TeamController');
const multer = require('multer');
const {findd} = require('../middleware/Cources')
const router = express.Router();
router.get('/team', findd(Team))


module.exports = router;