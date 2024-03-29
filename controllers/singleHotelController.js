// const express = require('express');
// const router = express.Router();
const Hotel = require("../model/hotel.model");


const singlehotelHandler = async(req,res)=>{
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel);
    } catch (error) {
        res.status(404).json({msg:"Error"});
    }
}

module.exports = singlehotelHandler;