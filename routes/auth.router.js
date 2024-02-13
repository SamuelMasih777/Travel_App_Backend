const express = require('express');
const router = express.Router();
// const CryptoJS = require('crypto-js');
// const User = require('../model/user.model');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');

const signupHandler = require('../controllers/signupControllers')
const loginHandler = require('../controllers/loginControllers')

router.route('/register')//localhost:3500/api/auth/register
    .post(signupHandler);

router.route("/login")
    .post(loginHandler);

module.exports = router;