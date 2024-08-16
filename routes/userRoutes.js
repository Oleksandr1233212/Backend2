
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const multer = require('multer');

const router = express.Router();

router.post('/register', multer().none(), registerUser);
router.post('/login', multer().none(), loginUser);

module.exports = router;