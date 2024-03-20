const express = require('express');
const router = express.Router();
const { getAllUsers, register, login } = require('../controllers/userController');



router
    .get('/', getAllUsers)
    .post('/login', login)
    .post('/', register);

module.exports = router;




