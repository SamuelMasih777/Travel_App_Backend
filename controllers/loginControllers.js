const express = require('express');
// const router = express.Router();
// const CryptoJS = require('crypto-js');
const User = require('../model/user.model');
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const loginController = async(req,res)=>{
    try {
        // const user = await User.findOne({number: req.body.number})
        // !user && res.status(401).json({msg:"Incorrect Mobile Number"});
        // // console.log(user.password);
        // const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString();
        // console.log({decodedPassword})
        // // console.log(req.body.password)
        // decodedPassword !== req.body.password && res.status(401).json({msg:"Incorrect Password"});
        const user = await User.findOne({number: req.body.number})
        if (!user) {
            return res.status(401).json({msg:"Incorrect Mobile Number"});
        }
        // console.log(user);
        // console.log(user.password);//removed Crypto Encrtption and Decryption because it was not working
        const decodedPassword = user.password;
        // console.log({decodedPassword})

        if (decodedPassword !== req.body.password) {
            return res.status(401).json({msg:"Incorrect Password"});
        }
        const { password, ...rest} = user._doc;
        const accessToken = jwt.sign({username:user.username},process.env.ACCESS_TOKEN)
        res.json({...rest, accessToken});

    } catch (error) {
        console.log(error);
    }
}
module.exports = loginController