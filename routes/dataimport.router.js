const express = require('express');
const mongoose = require('mongoose');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels")

const router = express.Router();

router.route('/')
    .post(async(req,res)=>{
        try {
            await Hotel.deleteMany();
            const hotelInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelInDB)
        } catch (error) {
            res.json({message:"Could Not Add Data in DataBase"})
            console.log(error)
        }
    })

module.exports = router;