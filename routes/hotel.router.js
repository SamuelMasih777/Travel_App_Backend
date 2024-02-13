const express = require('express');
const router = express.Router();

// const hotels = require('../data/hotels');
// const Hotel = require("../model/hotel.model")
const getallhotelHandler = require('../controllers/hotelController');
router.route("/")  //localhost:3500/api/hotels
    .get(getallhotelHandler)

// router.route("/categories")  //localhost:3500/api/hotels/categories
//     .get((req,res)=>{
//         res.json(hotels.data.category)
//     })
module.exports = router