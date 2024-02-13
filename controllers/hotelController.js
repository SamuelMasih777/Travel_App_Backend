const express = require('express');
const router = express.Router();

// const hotels = require('../data/hotels');
const Hotel = require("../model/hotel.model")

const getallhotelHandler = async (req,res)=>{
    // res.json(hotels.data)// from our Local Data
    const hotelCategory = req.query.category //localhost:3500/api/hotels?category=National+Park
    try {            
        let hotels
        if(hotelCategory){
            hotels = await Hotel.find({category:hotelCategory})
        }else{
            hotels = await Hotel.find({});
        }            
        hotels ? res.json(hotels) : res.status(404).json({msg:"No Data Found"});
    } catch (error) {
        console.log("Error");
        res.json({msg: "Can't find data"});
    }

}
module.exports = getallhotelHandler;