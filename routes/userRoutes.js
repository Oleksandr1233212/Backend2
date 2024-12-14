
const express = require('express');
const { registerUser, loginUser, newUser, newTeacher, updUser, students, teachers } = require('../controllers/userController');
const multer = require('multer');

const router = express.Router();

router.post('/register', multer().none(), registerUser);
router.post('/login', multer().none(), loginUser);
router.post('/students', multer().none(), newUser)
router.post('/teacher', multer().none(), newTeacher)
router.post('/students/upd', multer().none(), updUser)
router.get('/students/look', students)
router.get('/teachers', teachers)
module.exports = router;