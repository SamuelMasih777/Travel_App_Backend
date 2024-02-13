const express = require('express');
// const router = express.Router();
// const CryptoJS = require('crypto-js');
const User = require('../model/user.model');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');

const signupHandler = async(req,res)=>{
    try {
        // const userObject = 
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: req.body.password
        });// will create user
        const savedUser = await newUser.save() // This will save in DataBase
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Could not Save User"});
    }
}
module.exports = signupHandler;