const express = require('express');
const { userLogin, userSignUp } = require('../controllers/userController');
const route = express.Router();

// login
route.post('/login', userLogin);


// signup
route.post('/signup', userSignUp);



module.exports = route ;